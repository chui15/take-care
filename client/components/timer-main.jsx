import React from 'react';
import { Link } from 'react-router-dom';

class TimerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      timerOn: false,
      second: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: true
    });
    this.startTimer();
  }

  startTimer() {
    this.setState({
      timerOn: true,
      second: this.state.second
    });
    this.timer = setInterval(() => {
      this.setState({
        second: this.state.second + 1
      });
    }, 1000);
  }

  stopTimer() {
    this.setState({
      timerOn: false
    });
    clearInterval(this.timer);
  }

  handleReset() {
    this.setState({
      second: 0,
      start: 0
    });
  }

  render() {
    let user = localStorage.getItem('UserName');
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
        <div className="row justify-content-center">
          <div className="col-10 timer-container" onClick={this.handleReset}>
            <span className="timer-display">{this.state.second}</span>
          </div>
        </div>
        <div className="row justify-content-center">
          {this.state.timerOn === false && this.state.second === 0 && (
            <div className="button-start-timer">
              <span onClick={this.handleClick}>Start Timer</span>
            </div>
          )}
          {this.state.timerOn === true && (
            <div className="button-start-timer stop-timer">
              <span onClick={this.stopTimer}>Stop Timer</span>
            </div>
          )}
          {this.state.timerOn === false && this.state.second > 0 && (
            <div className="button-start-timer">
              <span onClick={this.handleClick}>Start Timer</span>
            </div>
          )}
        </div>
        <div className="row justify-content-center">
          <div className="timer-message-container align-items-start">
            <span className="water-reminder">Hey {user}, did you remember to drink water and stretch?</span>
            <span className="water-reminder">~~旦_(-ω-｀｡)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerScreen;
