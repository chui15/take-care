import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AddGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      value: 0,
      goalAdded: false,
      goalCheck: '',
      descriptionCheck: '',
      fieldsCheck: ''
    };
    this._isMounted = false;
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProgressChange = this.handleProgressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addGoal = this.addGoal.bind(this);
    this.fadeGoal = this.fadeGoal.bind(this);
  }

  addGoal(goal){
    if(this._isMounted) {
      fetch('/api/goals_add.php', {method: 'POST', body: JSON.stringify(goal), headers: {'Content-Type' : 'application/json'}});
    }
  }

  componentDidMount(){
    this._isMounted = true;
  }

  handleProgressChange(event) {
    this.setState({
      value: event.target.value
    });
  }


  handleGoalChange(event){
    this.setState({
      title: event.target.value
    });
  }

  handleDescriptionChange(event){
    this.setState({
      description: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    if (this._isMounted) {
      if (this.state.title === '' || this.state.description === ''){
        this.setState({
          fieldsCheck: 'Fields can\'t be empty (◕︿◕✿)'
        });
        setTimeout(() => {
          this.setState({
            fieldsCheck: ''
          });
        }, 3000);
      } else {
        const regex = /.{5,}/;
        if (!regex.test(this.state.description) && this.state.description !== '') {
          this.setState({
            descriptionCheck: 'bigger (/#-_-)/~┻┻〃'
          });
          setTimeout(() => {
            this.setState({
              descriptionCheck: ''
            });
          }, 3000);
        }
        if (!regex.test(this.state.title) && this.state.title !== '') {
          this.setState({
            goalCheck: 'We can do bigger ( •̀ω•́ )σ'
          });
          setTimeout(() => {
            this.setState({
              goalCheck: ''
            });
          }, 3000);
        } else {
        let progressValue = Number.parseFloat(this.state.value);
        let newGoal = {
          title: this.state.title,
          description: this.state.description,
          value: progressValue
        };
        this.addGoal(newGoal);
        this.setState({
          title: '',
          description: '',
          value: 0,
          goalAdded: true
        });
        var timeout = window.setTimeout(this.fadeGoal, [1500]);
        }
      }
      setTimeout(() => {
        this.props.history.push('/goals');
      }, 1000);
    }
  }

  fadeGoal(){
    if(this._isMounted) {
        this.setState({
        goalAdded: false
      })
    }
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  render() {
    let catchFade = this.state.goalAdded ? 'goal-completed' : 'hidden';
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
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Goal Name :
              <span className="goal-check"> {this.state.goalCheck}</span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="ml-2 col align-self-start">
            <input type="text" className="col-11 goal-input" value={this.state.title} placeholder="i.e. cook dinner" onChange={this.handleGoalChange}></input>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Description :
              <span className="goal-check"> {this.state.descriptionCheck}</span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="ml-2 col align-self-start">
            <input type="text" className="col-11 description-input" value={this.state.description} placeholder="i.e. beef noodle soup" onChange={this.handleDescriptionChange}></input>
          </div>
        </div>
        <div className="row">
          <div className="col align-self-start">
            <span className="input-title">Current Progress :</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 goals-item align-self-center">
            <div className="goal-plant-empty"></div>
            <div className="goal-plant-full"></div>
            <div>
              <p className="goal">{name}</p>
            </div>
            <div className="slidecontainer">
              <input type="range" min="0" max="100"
                value={this.state.value} className="slider" onChange={this.handleProgressChange}></input>
              <p className="progress">Progress: {this.state.value}%</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className={catchFade}>
            <span>Goal added! <br/> (つ▀¯▀)つ</span>
          </div>
          <div className="col-6 goals-button">
            <span className="intro-click" onClick={this.handleSubmit}>Add Goal</span>
          </div>
          <div className="row">
            <div className="field-check">
              <span>{this.state.fieldsCheck}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddGoal);
