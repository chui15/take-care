import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="home-buttons-container">
          <div className="home-row">
            <div className="button-home">
              <Link to="/goals/add" className="intro-click">Add Goal</Link>
              <img src="/images/addgoal.jpg" className="button-home-image"></img>
            </div>
            <div className="button-home">
              <Link to="/goals" className="intro-click">View Goals</Link>
              <img src="/images/viewgoals.jpg" className="button-home-image"></img>
            </div>
          </div>
          <div className="home-row">
            <div className="button-home">
              <Link to="/timer" className="intro-click">Timer</Link>
              <img src="/images/timer.jpg" className="button-home-image"></img>
            </div>
            <div className="button-home">
              <Link to="/garden" className="intro-click">Garden</Link>
              <img src="/images/garden.jpg" className="button-home-image-garden"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
