import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <Router>
      <div className="title-screen">
        <div className="row justify-content-center">
          <div className="col bulbasaur-home"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 intro-message"></div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
