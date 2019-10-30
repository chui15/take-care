import React from 'react';
import { Link } from 'react-router-dom';

class GoalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      name: null,
      date: null,
      description: null,
      progress: '',
      timeStart: ''
    };
    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.getGoalDetails = this.getGoalDetails.bind(this);
    this.millisToMinutesAndSeconds = this.millisToMinutesAndSeconds.bind(this)
  }


  componentDidMount(){
    const goalId = this.props.match.params.goal_id;
    this.getGoalDetails(goalId);
  }

  handleProgressChange(event) {
    this.setState({
      value: event.target.value
    });
  }


  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  getGoalDetails(goalid) {
    fetch(`/api/goals_detail.php?goal_id=${goalid}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const date = new Date(data.created);
        const time = this.millisToMinutesAndSeconds(data.timerTime)
        this.setState({
          name: data.title,
          timeStart: time,
          date: date.toLocaleDateString(),
          description: data.description,
          progress: data.progress
        });
      })
      .catch(err => { console.log('There was an error:', err) });
  }

  render() {
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
            <span className="goal-header-content">{this.state.name}</span>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Time on Goal :</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 goal-detail-info">
            <span className="goal-header-content">{this.state.timeStart}</span>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Dated Created :</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 goal-detail-info">
            <span className="goal-header-content">{this.state.date}</span>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Description :</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 goal-description">
            <span>{this.state.description}</span>
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
            <div>
              <p className="goal">{name}</p>
            </div>
            <div className="slidecontainer">
              <input type="range" min="0" max="100"
                value={this.state.progress} className="slider" onChange={this.handleProgressChange}></input>
              <p className="progress">Progress: {this.state.progress}%</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default GoalDetails;
