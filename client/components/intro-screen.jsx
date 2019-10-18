import React from 'react';
import { Link } from 'react-router-dom';

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.switchView = this.switchView.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  switchView() {
    this.props.setView('home', {});
  }

  handleNameChange() {
    localStorage.setItem('UserName', event.target.value);
  }

  render() {
    return (
      <div className="title-screen">
        <div className="row justify-content-center">
          <div className="col bulbasaur-home"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 intro-message-container">
            <span className="intro-message">How should I address you?</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <input type="text" className="col-6 button" onChange={this.handleNameChange}/>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 button">
            <Link to="/dashboard" className="intro-click">Let's Go!</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroScreen;
