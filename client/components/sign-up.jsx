import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
      confirmation: '',
      fieldsCheck: '',
      auth: false
    };
    this._isMounted = false;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.cancelRequest = this.cancelRequest.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
    setTimeout(()=>{
      this.props.history.push('/');
    }, 3000);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userName === '' || this.state.email === '' || this.state.password === ''){
      this.setState({
        fieldsCheck: 'Fields can\'t be empty (◕︿◕✿)'
      });
      setTimeout(() => {
        this.setState({
          fieldsCheck: ''
        });
      }, 3000);
    } else {
      let newUser = {
        user: this.state.userName,
        email: this.state.email,
        password: this.state.password
      };
      this.addUser(newUser);
      this.setState({
        userName: '',
        email: '',
        password: '',
        confirmation: 'Account successfully created (つ▀¯▀)つ'
      });
      setTimeout(() => {
        this.setState({
          confirmation: ''
        });
      }, 3000);
    }
  }

  addUser(user) {
    fetch('/api/new_user.php', { method: 'POST', body: JSON.stringify(user), headers: { 'Content-Type': 'application/json' } })
      .catch(err => console.error('fetch failed'));
    this._isMounted = true;
  }

  cancelRequest() {
    const controller = new AbortController();
    const signal = controller.signal;
    controller.abort();
  }

  componentWillUnmount() {
    this.cancelRequest();
    this._isMounted = false;
  }

  render(){
    let confirmation = this.state.confirmation;
    return (
      <div className="signup-screen">
        <div className="row">
          <div className="log-out-button align-self-start">
            <Link to="/" className="log-out">Back</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-9 header">
            <span className="header-content">Take Care (･ω･*⊂)</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 intro-message-container">
            <span className="intro-message">Please enter your info below:</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <input type="text" value={this.state.userName} className="col-10 initial-input" onChange={this.handleNameChange} placeholder="User Name" />
        </div>
        <div className="row justify-content-center">
          <input type="text" value={this.state.email} className="col-10 initial-input" onChange={this.handleEmailChange} placeholder="Email" />
        </div>
        <div className="row justify-content-center">
          <input type="password" value={this.state.password} className="col-10 initial-input" onChange={this.handlePasswordChange} onKeyPress={this.handleKeyPress} placeholder="Password" />
        </div>
        <div className="row justify-content-center">
          <div className="col-10 field-check">
            <span>{this.state.fieldsCheck}</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <span className="new-user-check">{confirmation}</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 intro-button">
            <span className="intro-click" onClick={this.handleSubmit}>Create New Account</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 ml-2 home-image"></div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpScreen);
