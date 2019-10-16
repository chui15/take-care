import React from 'react';

class IntroScreen extends React.Component {
  constructor(props){
    super(props);
    this.switchView = this.switchView.bind(this);
  }

  switchView(){
    this.props.setView('home', {});
  }

  render(){
    return (
      <div className="title-screen">
        <div className="row justify-content-center">
          <div className="col bulbasaur-home"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 intro-message-container">
            <span className="intro-message">How should I address you?</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 button">
            <span>Jan</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 button">
            <span onClick={this.switchView}>Let's Go!</span>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroScreen;
