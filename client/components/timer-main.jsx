import React from 'react';
import { Link } from 'react-router-dom';

class TimerScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      </div>
    );
  }
}

export default TimerScreen;
