import React from 'react';
import { Link } from 'react-router-dom';

class AddGoal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = localStorage.getItem('UserName');
    return (
      <div className="add-goal-screen">
        <div className="row align-items-start">
          <div className="return-home-button">
            <Link to="/dashboard" className="return-home">Home</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 header">
            <span className="goal-header-content">Goal Details (ง •̀ω•́)ง✧</span>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-8 ml-2 home-image"></div>
          <div className="col-md-4 home-message-container align-items-start">
            <span className="home-message">What are we going to do, {user}? (`•ω•´๑)</span>
          </div>
        </div> */}
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Goal Name :</span>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <input type="text" className="col-11 goal-input" placeholder="goal"></input>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Description :</span>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <input type="text" className="col-11 description-input" placeholder="description"></input>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Current Progress :</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 button-home">
            <Link to="/goals/details" className="intro-click">Add Goal</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGoal;
