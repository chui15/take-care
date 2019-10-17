import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Garden from './garden';
import AddGoal from './add-goal';
import TimerScreen from './timer-main';
import GoalsList from './goals-list';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="home-screen">
          <div className="row justify-content-center">
            <div className="col-9 header">
              <span className="header-content">Take Care (･ω･*⊂)</span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 intro-message-container">
              <span className="intro-message">Put pun/qoute here</span>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 button">
              <Route path="/add-goal" Component={AddGoal} />
              <span>Add Goal</span>
            </div>
          </div><div className="row justify-content-center">
            <div className="col-6 button">
              <Route path="/goals-list" Component={GoalsList} />
              <span>GoalTracker</span>
            </div>
          </div><div className="row justify-content-center">
            <div className="col-6 button">
              <Route path="/timer-main" Component={TimerScreen} />
              <span>Stop Watch</span>
            </div>
          </div><div className="row justify-content-center">
            <div className="col-6 button">
              <Route path="/garden" Component={Garden}/>
              <span>Garden</span>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default HomeScreen;
