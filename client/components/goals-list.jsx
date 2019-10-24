import React from 'react';
import { Link } from 'react-router-dom';
import GoalsListItem from './goals-list-item';

class GoalsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: []
    };
    this.getGoals = this.getGoals.bind(this);
  }

  getGoals(){
    fetch('/api/goals_list.php')
      .then(res => res.json())
      .then(data => this.setState({
        goals: this.state.goals.concat(data)
      }));
  }

  componentDidMount(){
    this.getGoals();
  }

  render() {
    let user = localStorage.getItem('UserName');
    const listItems = this.state.goals.map(goal => {
      return (
        <GoalsListItem key={goal.id}
          goal={goal} />
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
