import React from 'react';
import { Link } from 'react-router-dom';
import GoalsListItem from './goals-list-item';
import GoalModal from './goal-completion-modal';

class GoalsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      filtered: [],
      search: '',
      userName: ''
    };
    this._isMounted = false;
    this.getGoals = this.getGoals.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
  }

  getGoals(){
    fetch('/api/goals_list.php')
      .then(res => res.json())
      .then(data => {
        if(this._isMounted){
          this.setState({
            goals: this.state.goals.concat(data),
            filtered: this.state.filtered.concat(data)
        })
      }})
      .catch(err => { console.log('There was an error:', err) });
  }

  deleteGoal(goalID) {
    let updatedGoals = {};
    let copy = this.state.goals.filter(goal => {
      const copyGoals = Object.assign({}, goal);
      if (copyGoals.id == goalID) {
        return false;
      }
      return true;
    });
    fetch('/api/goal_delete.php', { method: 'DELETE', body: JSON.stringify(goalID), headers: { 'Content-Type': 'application/json' } })
      .then(this.setState({goals: copy, filtered: copy}))
      .catch (err => { console.log('There was an error:', err) });
  }


  componentDidMount(){
    this._isMounted = true;
    if(this._isMounted){
      this.getGoals();
    }
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value
    });
    let currentGoals = [];
    let searchedGoals=[];
    if(this.state.search !== "") {
      currentGoals = this.state.goals;
      searchedGoals = currentGoals.filter(goal => {
        const _goal = goal.title.toLowerCase();
        const filter = this.state.search.toLowerCase();
        return _goal.includes(filter);
      });
    }
    else {
      searchedGoals = this.state.goals;
    }
    this.setState({
      filtered: searchedGoals
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let user = this.props.userName;
    let gardenID = this.props.gardenID;
    let filteredGoals;
    if(this.state.search !== ''){
      filteredGoals = this.state.filtered.filter(goal => {
        return goal.title.toString().toLowerCase().includes(this.state.search.toString().toLowerCase());
      });
    } else {
      filteredGoals = this.state.goals;
    }
    const listItems = filteredGoals.map(goal => {
      return (
        <GoalsListItem key={goal.id}
          goal={goal} userName={this.props.userName} gardenID={gardenID} deleteGoal={this.deleteGoal}/>
      );
    });
    let initialClass = '';
    if (this.state.goals.length === 0){
      initialClass = 'col-8 no-goals';
    } else {
      initialClass = 'no-goals-hidden';
    }

    return (
      <div className="goals-screen">
        <div className="row align-items-start">
          <div className="return-home-button">
            <Link to="/dashboard" className="return-home">Home</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 header">
            <span className="goal-header-content">Goal Tracker (ง •̀ω•́)ง✧</span>
          </div>
          <div className="row justify-content-center">
            <input type="text" value={this.state.search} className="col search-input" placeholder="Search goals" onChange={this.handleSearch}></input>
          </div>
          { listItems }
          <div className={initialClass}>
            <div className="col-md-8 ml-2 home-image"></div>
            <span className="no-goals-content">What are we going to do today, {user}?</span>
            <div className="row justify-content-center">
              <div className="col-6 goals-button">
                <Link to="/goals/add" className="intro-click" onClick={this.handleSubmit}>Add Goal</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoalsList;
