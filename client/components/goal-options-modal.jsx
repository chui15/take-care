import React from 'react';
import { Link } from 'react-router-dom';

class TimerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
      showModal: true,
      cancelClicked: false
    };
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  render() {
    let showModal = this.state.showModal ? 'modal-goal-item' : 'hidden';

    return (
      <div className={showModal}>
        <div className="modal-header">
          <h5 className="modal-title goal-modal-title">Hey, ! Would you like to do?</h5>
        </div>
        <div className="row justify-content-center">
          <div className="button-place-plant">
            <Link to= {`/timer/${this.props.goalID}`} className="garden-click">Timer</Link>
          </div>
          <div className="button-cancel">
            <Link to={`/goals/${this.props.goalID}/details`} className="garden-click">Details</Link>
          </div>
        </div>
        <div className="mt-3 text-center">
          <span onClick={this.close} className="">Cancel</span>
        </div>
      </div>
    );
  }
}

export default TimerModal;
