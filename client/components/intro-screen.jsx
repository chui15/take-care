import React from 'react';
import { Link } from 'react-router-dom';

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    localStorage.setItem('UserName', event.target.value);
    this.setState({
      userName: event.target.value
    });
  }

  handleEmailChange(event){
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div className="title-screen">
        <div className="row justify-content-center">
          <div className="col bulbasaur-home"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 intro-message-container">
            <span className="intro-message">Please enter your login info below:</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <input type="text" value={this.state.email} className="col-8 initial-input" onChange={this.handleEmailChange} placeholder="Email or Username" />
        </div>
        <div className="row justify-content-center">
          <input type="password" value={this.state.password} className="col-8 initial-input" onChange={this.handlePasswordChange} placeholder="Password"/>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 intro-button">
            <Link to="/dashboard" className="intro-click">Let's Go!</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 intro-button">
            <Link to="/signup" className="intro-click">Create New Account</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroScreen;
