import React from 'react';
import { Link } from 'react-router-dom';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let user = this.props.userName;
    return (
      <div className="home-screen">
        <div className="row">
          <div className="return-home-button align-self-start">
            <span className="log-out" onClick={this.props.logOut}>Log Out</span>
          </div>
        </div>
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
              <Link to="/goals/add" className="intro-click">Add Goal
              <img src="/images/addgoal.png" className="button-home-image"></img></Link>
            </div>
            <div className="button-home">
              <Link to="/goals" className="intro-click">View Goals
              <img src="/images/vector-checklist-icon.png" className="button-home-image"></img></Link>
            </div>
          </div>
          <div className="home-row">
            <div className="button-home">
              <Link to="/timer" className="intro-click">Timer
              <img src="/images/timer.png" className="button-home-image"></img></Link>
            </div>
            <div className="button-home">
              <Link to="/garden/1" className="intro-click">Garden
              <img src="/images/garden.png" className="button-home-image-garden"></img></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
