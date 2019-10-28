import React from 'react';
import { Link } from 'react-router-dom';

class GoalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      id: []
    };
    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.updateProgressValue = this.updateProgressValue.bind(this);
    this.getGoalDetails = this.getGoalDetails.bind(this);
  }

  handleProgressChange(event) {
    this.setState({
      value: event.target.value
    });
    this.updateProgressValue(this.state.value);
  }

  updateProgressValue(newValue){
    //fetch call here to update the value
    return null;
  }

  // /api/garden_items.php?garden_id = 1

  getGoalDetails(goalid) {
    fetch('/api/goal_details.php?goal_id')
      .then(res => res.json())
      .then(data => {
        this.setState({
          id: []
        })
      });
  }
  //transer the id in the url

  componentDidMount(){
    this.getGoalDetails(this.props.goalid);
  }

  render() {
    let { id } = this.state;
    return (
      <div className="goal-details-screen">
        <div className="row align-items-start">
          <div className="return-home-button">
            <Link to="/goals" className="return-home">Back</Link>
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
            <span className="goal-header-content">Goal Name here</span>
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
                value={this.state.value} className="slider" onChange={this.handleProgressChange}></input>
              <p className="progress">Progress: {this.state.value}%</p>
            </div>
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
