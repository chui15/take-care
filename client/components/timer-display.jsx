import React from 'react';

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="timer-screen">
        <div className="row justify-content-center">
          <div className="col-8 header">
            <span className="timer-header-content">Productivity Timer (๑•̀ㅂ•́)و</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerComponent;
