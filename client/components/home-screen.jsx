import React from 'react';
import { Link } from 'react-router-dom';
import Garden from './garden';
import AddGoal from './add-goal';
import TimerScreen from './timer-main';
import GoalsList from './goals-list';

class HomeScreen extends React.Component {

  render() {
    let user = localStorage.getItem('UserName');
    return (
      <div className="home-screen">
        <div className="row justify-content-center">
          <div className="col-9 header">
            <span className="header-content">Take Care (･ω･*⊂)</span>
            </div>
          </div>
        <div className="row">
          <div className="col-md-8 ml-2 home-image"></div>
          <div className="col-md-4 home-message-container align-items-start">
            <span className="home-message">Hello, {user}! Here's to a productive day~</span>
          </div>
        </div>
          <div className="row justify-content-center">
            <div className="col-6 button-home">
              <Link to="/goals/add" className="intro-click">Add Goal</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 button-home">
              <Link to="/goals" className="intro-click">Goal Tracker</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 button-home">
              <Link to="/timer" className="intro-click">Timer</Link>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 button-home">
              <Link to="/garden" className="intro-click">Garden</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
