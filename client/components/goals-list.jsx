import React from 'react';
import { Link } from 'react-router-dom';

class GoalsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="goals-screen">
        <div className="row align-items-start">
          <div className="return-home-button">
            <Link to="/dashboard" className="return-home">Home</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 header">
            <span className="goal-header-content">Goal Tracker (ง •̀ω•́)ง✧</span>
          </div>
        </div>
        <div className="goals-container, row justify-content-center">
          <div className="goals-item">
            <div className="goal-description">
              <input className="goal-input" type="text" placeholder="Get tacos" />
            </div>
            <div className="checkbox">
              ✓
            </div>
          </div>
          <form className="multi-range-field my-5 pb-5">
            <input id="multi1" className="multi-range" type="range" />
          </form>
          <div className="goals-item">
            <div className="goal-description">
              <input className="goal-input" type="text" placeholder="Learn to code" />
            </div>
            <div className="checkbox">
              ✓
            </div>
          </div><div className="goals-item">
            <div className="goal-description">
              <input className="goal-input" type="text" placeholder="Do Laundry" />
            </div>
            <div className="checkbox">
              ✓
            </div>
          </div><div className="goals-item">
            <div className="goal-description">
              <input className="goal-input" type="text" placeholder="Build a Keyboards" />
            </div>
            <div className="checkbox">
              ✓
            </div>
          </div>
          <div className="goals-item">
            <div className="goal-description">
              <input className="goal-input" type="text" placeholder="yolo" />
            </div>
            <div className="checkbox">
              ✓
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoalsList;
