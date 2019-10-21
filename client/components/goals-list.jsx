import React from 'react';
import { Link } from 'react-router-dom';

class GoalsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
        <div className="row justify-content-center">
          <div className="goals-container">
            <div className="col goals-item align-items-center">
              <input type="checkbox" className="checkmark"></input>
              <div className="goal-description">
                <p className="goal">Doing laundry</p>
              </div>
              <div className="slidecontainer">
                <input type="range" min="0" max="100"
                  value={this.state.value} className="slider" onChange={this.handleChange}></input>
                <p className="progress">Progress: {this.state.value}%</p>
              </div>
            </div>
            <div className="col goals-item align-items-center">
              <input type="checkbox" className="checkmark"></input>
              <div className="goal-description">
                <p className="goal">Compare Tacos</p>
              </div>
              <div className="slidecontainer">
                <input type="range" min="0" max="100"
                  value={this.state.value} className="slider" onChange={this.handleChange}></input>
                <p className="progress">Progress: {this.state.value}%</p>
              </div>
            </div>
            <div className="col goals-item align-items-center">
              <input type="checkbox" className="checkmark"></input>
              <div className="goal-description">
                <p className="goal">Buy Cereal</p>
              </div>
              <div className="slidecontainer">
                <input type="range" min="0" max="100"
                  value={this.state.value} className="slider" onChange={this.handleChange}></input>
                <p className="progress">Progress: {this.state.value}%</p>
              </div>
            </div>
            <div className="col goals-item align-items-center">
              <input type="checkbox" className="checkmark"></input>
              <div className="goal-description">
                <p className="goal">Eat Cereal</p>
              </div>
              <div className="slidecontainer">
                <input type="range" min="0" max="100"
                  value={this.state.value} className="slider" onChange={this.handleChange}></input>
                <p className="progress">Progress: {this.state.value}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoalsList;
