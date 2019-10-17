import React from 'react';

class GoalsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="goals-screen">
        <div className="row justify-content-center">
          <div className="col-8 header">
            <span className="goal-header-content">Goal Tracker (ง •̀ω•́)ง✧</span>
          </div>
        </div>
      </div>
    );
  }
}

export default GoalsList;
