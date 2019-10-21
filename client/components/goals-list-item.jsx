import React from 'react';

class GoalsListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  render(){
    let name = this.props.goal.title;
    return (
      <div className="row justify-content-center">
          <div className="col goals-item align-items-center">
            <div className="goal-description">
              <p className="goal">{name}</p>
            </div>
            <div className="slidecontainer">
              <input type="range" min="0" max="100"
                value={this.state.value} className="slider" onChange={this.handleChange}></input>
              <p className="progress">Progress: {this.state.value}%</p>
            </div>
          </div>
        </div>
    );
  }
}

export default GoalsListItem;
