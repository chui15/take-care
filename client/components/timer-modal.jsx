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
    console.log("goal id",this.props.goalID);
    let user = localStorage.getItem('UserName');
    let showModal = this.state.showModal ? 'modal-goal-item' : 'hidden';

    return (
      <div className={showModal}>
        <div className="modal-header">
          <h5 className="modal-title goal-modal-title">Hey, {user}! Would you like to set a timer?</h5>
        </div>
        <div className="row justify-content-center">
          <div className="button-place-plant">
            <Link to= {`/timer/${this.props.goalID}`} className="garden-click">Let's Go!</Link>
          </div>
          <div className="button-cancel">
            <span onClick={this.close} className="garden-click">I'm OK</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerModal;
