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
        );
      })
    );
  }
}

export default GoalsList;
