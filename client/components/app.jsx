import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import IntroScreen from './intro-screen';
import HomeScreen from './home-screen';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: {
        name: 'intro',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params){
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render(){
    let screen;
    if (this.state.view.name === 'intro'){
      screen = <IntroScreen setView={this.setView} />;
    } else if (this.state.view.name === 'home'){
      screen = <HomeScreen />;
    }
    return (
      <>
      {screen}
      </>
    );
  }
}

export default App;
