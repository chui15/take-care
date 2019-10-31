import React from 'react';
import { Link } from 'react-router-dom';

class TimerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
      userName: '',
      goalTitle: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.createNewTimer = this.createNewTimer.bind(this);
  }

  componentDidMount(){
    this._isMounted = true;

    fetch('/api/get_goal_time.php', {
      method: 'POST',
      body: JSON.stringify({
        goalId: this.props.match.params.goal_id
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        throw new Error(data.error[0]);
      }

      this.setState({
        timerTime: data.timerTime,
        goalTitle: data.title
      });
    })
    .catch(error => {
      console.error('It all went wrong!', error);
    });
  }

  handleClick(){
    this.setState({
      isClicked: true
    });
    this.startTimer();
  }

  startTimer() {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 1000);
  }

  stopTimer() {
    this.setState({
      timerOn: false
    });
    clearInterval(this.timer);

    this.saveTime(this.state.timerTime);
  }

  createNewTimer() {
    const goalId = this.props.match.params.goal_id;
    let timeObject = {
      goalId
    };
    fetch('/api/save-time.php', { method: 'POST', body: JSON.stringify(timeObject), headers: { 'Content-Type': 'application/json' } })
      .catch(err => console.error('Fetch failed!', err));
  }

  saveTime(time) {
    const goalId = this.props.match.params.goal_id;
    let timeObject = {
      time,
      goalId
    };
    fetch('/api/save-time.php', { method: 'POST', body: JSON.stringify(timeObject), headers: { 'Content-Type' : 'application/json' }})
    .catch(err => console.error('Fetch failed!', err));
  }

  handleReset(){
    this.setState({
      timerStart: 0,
      timerTime: 0,
    }, () => this.stopTimer());
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let user = this.props.userName;
    var goal1 = "goal test";
    let timerTime = this.state.timerTime;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    let goalTitleClass = "";
    if (this.state.goalTitle !== '') {
      goalTitleClass = "timer-goal-message-container align-items-start";
    } else {
      goalTitleClass = "no-goals-hidden";
    }

    return (
      <div className="timer-screen">
        <div className="row align-items-start">
          <div className="return-home-button">
            <Link to="/dashboard" className="return-home">Home</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 header">
            <span className="timer-header-content">Productivity Timer (๑•̀ㅂ•́)و</span>
          </div>
        </div>
        <div className="row justify-content-center timer">
          <div className="col-10 timer-container">
            <span className="timer-display">{hours}:{minutes}:{seconds}</span>
          </div>
        </div>
        <div className="row justify-content-center">
          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <div className="button-start-timer">
              <span onClick={this.handleClick}>Start</span>
            </div>
          )}
          {this.state.timerOn === true && (
            <div className="button-start-timer stop-timer">
              <span onClick={this.stopTimer}>Stop</span>
            </div>
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <div className="button-start-timer">
              <span onClick={this.handleClick}>Resume</span>
            </div>
          )}
          <div className="button-reset-timer">
            <span onClick={this.handleReset}>Reset</span>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* <div className={goalTitleClass}>
            <div className="goal-div">Timer is set to the following goal: <h5 className="goal-timer">{this.state.goalTitle}</h5>
          </div> */}
          <div className="timer-message-container align-items-start">
            <span className="water-reminder">Hey {user}, did you remember to drink water and stretch?</span>
            <span className="water-reminder">~~旦_(-ω-｀｡)</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 home-image"></div>
        </div>
      </div>
    );
  }
}

export default TimerScreen;
