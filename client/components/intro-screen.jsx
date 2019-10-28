import React from 'react';
import { Link } from 'react-router-dom';

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      userAdded: false
    };
    this.switchView = this.switchView.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUser = this.addUser.bind(this);
    this.fadeConfirm = this.fadeConfirm.bind(this);
  }

  switchView() {
    this.props.setView('home', {});
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
    let newUser = {
      user: this.state.userName,
      email: this.state.email,
      password: this.state.password
    };
    this.addUser(newUser);
    this.setState({
      userName: '',
      email: '',
      password: ''
    });
    setTimeout(()=> {this.fadeConfirm}, 1500);
  }

  addUser(user){
    fetch('/api/new_user.php', {method: 'POST', body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}});
  }

  fadeConfirm() {
    this.setState({
      userAdded: false
    });
  }

  render() {
    let catchFade = this.state.userAdded ? 'goal-completed' : 'hidden';
    return (
      <div className="title-screen">
        <div className="row justify-content-center">
          <div className="col bulbasaur-home"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 intro-message-container">
            <span className="intro-message">Please enter your info below:</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <input type="text" value={this.state.userName} className="col-8 initial-input" onChange={this.handleNameChange} placeholder="User Name"/>
        </div>
        <div className="row justify-content-center">
          <input type="text" value={this.state.email} className="col-8 initial-input" onChange={this.handleEmailChange} placeholder="Email" />
        </div>
        <div className="row justify-content-center">
          <input type="password" value={this.state.password} className="col-8 initial-input" onChange={this.handlePasswordChange} placeholder="Password"/>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 intro-button" onClick={this.handleSubmit}>
            <span className="intro-click">Add User</span>
          </div>
          <div className={catchFade}>
            <span>User added! <br /> (つ▀¯▀)つ</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 intro-button">
            <Link to="/dashboard" className="intro-click">Let's Go!</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroScreen;
