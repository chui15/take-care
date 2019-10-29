import React from 'react';
import { Link } from 'react-router-dom';

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleNameChange(event) {
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

  handleSubmit(){
    event.preventDefault();
    this.props.logIn(this.state);
  }

  handleKeyPress(event){
    if (event.key === 'Enter'){
      this.handleSubmit(event);
    }
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
          <input type="text" value={this.state.email} className="col-8 initial-input" onChange={this.handleEmailChange} placeholder="Email" />
        </div>
        <div className="row justify-content-center">
          <input type="password" value={this.state.password} className="col-8 initial-input" onChange={this.handlePasswordChange} onKeyPress={this.handleKeyPress} placeholder="Password"/>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 intro-button">
            <span className="intro-click" onClick={this.handleSubmit}>Let's Go!</span>
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
