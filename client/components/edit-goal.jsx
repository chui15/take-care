import React from 'react';
import { withRouter } from 'react-router-dom';

class EditGoal extends React.Component {
  render(){
    const params = this.props.match.params;

    console.log('PARAMS:', params);

    return (
      <div>
        <h1>Edit a Goal Here with ID: {params.goal_id}</h1>
      </div>
    );
  }
}

export default withRouter(EditGoal);
