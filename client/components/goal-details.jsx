import React from 'react';
import { Link } from 'react-router-dom';

class GoalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="goal-details-screen">
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
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Goal Name :</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 goal-detail-info align-self-start">
            <span className="goal-header-content">Goal name here</span>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Dated Created :</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 goal-detail-info">
            <span className="goal-header-content">Goal date here</span>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Description :</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 goal-detail-info">
            <span className="goal-header-content">Goal description here</span>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Current progress :</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 goals-item align-self-center">
            <div className="goal-plant-empty"></div>
            <div className="goal-plant-full"></div>
            <div className="goal-description">
              <p className="goal">{name}</p>
            </div>
            <div className="slidecontainer">
              <input type="range" min="0" max="100"
                value={this.state.value} className="slider" onChange={this.handleChange}></input>
              <p className="progress">Progress: {this.state.value}%</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 goals-button">
            <Link to="/goals" className="intro-click">Save Changes</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 goals-button">
            <Link to="/timer" className="intro-click">Set Timer</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GoalDetails;
