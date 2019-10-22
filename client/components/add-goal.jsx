import React from 'react';
import { Link } from 'react-router-dom';

class AddGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      value: 0
    };
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addGoal = this.addGoal.bind(this);
  }

  addGoal(goal){
    fetch('/api/goals_add.php', {method: 'POST', body: JSON.stringify(goal), headers: {'Content-Type' : 'application/json'}})
      .then(res => res.json())
      .catch(error => console.error('POST fetch failed'));
  }

  handleProgressChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleGoalChange(event){
    this.setState({
      title: event.target.value
    });
  }

  handleDescriptionChange(event){
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let progressValue = Number.parseFloat(this.state.value);
    let newGoal = {
      title: this.state.title,
      description: this.state.description,
      value: progressValue
    };
    console.log(newGoal);
    this.addGoal(newGoal);
    this.setState({
      title: '',
      description: '',
      value: 0
    });
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
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Goal Name :</span>
          </div>
        </div>
        <div className="row">
          <div className="ml-2 col align-self-start">
            <input type="text" className="col-11 goal-input" value={this.state.title} placeholder="goal" onChange={this.handleGoalChange}></input>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Description :</span>
          </div>
        </div>
        <div className="row">
          <div className="ml-2 col align-self-start">
            <input type="text" className="col-11 description-input" value={this.state.description} placeholder="description" onChange={this.handleDescriptionChange}></input>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Current Progress :</span>
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
            <Link to="/goals/details" className="intro-click" onClick={this.handleSubmit}>Add Goal</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGoal;
