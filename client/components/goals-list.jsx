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
    fetch('localhost/819_goal_tracker/server/public/api/goals_list.php')
      .then(res => res.json())
      .then(data => this.setState({
        goals: this.state.goals.concat(data)
      }))
      .catch(error => console.error('Fetch failed', error));
  }

  componentDidMount(){
    this.getGoals();
  }

  render() {
    return (
      this.state.goals.map(goal => {
        return (
          <GoalsListItem key={goal.id}
            goal={goal} />
        )
      }),
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
        </div>
      </div>
    );
  }
}

export default GoalsList;
