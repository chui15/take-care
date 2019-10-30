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

  componentDidMount(){
    this.getGoals();
    this._isMounted = true;
  }

  handleSearch(event){
    this.setState({
      search: event.target.value
    });
    let currentGoals = [];
    let newGoals = [];
    if (this.state.search !== ''){
      currentGoals = this.state.goals;
      newGoals = currentGoals.filter(goal => {
        const lowerCaseGoal = goal.toString().toLocaleLowerCase();
        const filter = this.state.search.toString().toLocaleLowerCase();
        return lowerCaseGoal.includes(filter);
      });
    } else {
      newGoals = this.state.goals;
    }
    this.setState({
      filtered: newGoals
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
          goal={goal} userName={this.props.userName} gardenID={gardenID}/>
      );
    })
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
