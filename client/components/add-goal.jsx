import React from 'react';
import { Link } from 'react-router-dom';

class AddGoal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      </div>
    );
  }
}

export default AddGoal;
