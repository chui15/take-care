import React from 'react';
import { Link } from 'react-router-dom';
import GoalModal from './goal-completion-modal';
import GoalOptionsModal from './goal-options-modal';

class GoalsListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.goal.progress,
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.debounce = this.debounce.bind(this);
    this.updateProgress = this.debounce(this.updateProgress.bind(this), 500);
  }

  handleClick () {
    this.setState({
      clicked : true
    });
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
    let newProgress = {
      id: this.props.goal.id,
      progress: Number.parseFloat(event.target.value)
    };
    this.updateProgress(newProgress);
  }

  debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(){
      var context = this;
      var args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args)
      };
    };
  };

  updateProgress(newProgress){
    fetch('/api/progress_update.php', { method: 'POST', body: JSON.stringify(newProgress), headers: { 'Content-Type': 'application/json' } })
  }

  render(){
    let name = this.props.goal.title;
    let goalID = this.props.goal.id;
    let goalCompleted = this.props.goal['is-completed'];
    let initialClass = '';
    if (Number.parseFloat(this.state.value) === 100){
      initialClass = 'col-12 goals-item-completed align-self-center';
    } else {
      initialClass = 'col-12 goals-item align-self-center';
    }

    let goalModal;
    if (goalCompleted === 'true') {
      goalModal = null;
    } else if (Number.parseFloat(this.state.value) === 100){
      goalModal = <GoalModal />;
    }
    let optionsModal;
    if (this.state.clicked === true) {
      optionsModal = <GoalOptionsModal goalID={goalID}/>;
    } else {
      optionsModal = null;
    }
    return (
      <div className="row justify-content-center">
          <div className={initialClass}>
          <div className="goal-plant-empty"></div>
          <div className="goal-plant-full"></div>
            <div className="row goal-description justify-content-center">
            <span className="goal-click" onClick={this.handleClick}>{name}</span>
            </div>
            <div className="slidecontainer">
              <input type="range" min="0" max="100"
                value={this.state.value} className="slider" onChange={this.handleChange}></input>
              <p className="progress">Progress: {this.state.value}%</p>
            </div>
          </div>
          <div>
            {goalModal}
            {optionsModal}
          </div>
        </div>
    );
  }
}

export default GoalsListItem;
