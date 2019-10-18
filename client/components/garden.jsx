import React from 'react';
import { Link } from 'react-router-dom';

class Garden extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isClicked: false
    };
    this.clickPlant = this.clickPlant.bind(this);
  }

  clickPlant(){
    this.setState({
      isClicked: true
    });
  }

  render() {
    let plantClass = this.state.isClicked ? 'succulent1' : 'plant-item';
    let user = localStorage.getItem('UserName');
    return (
      <div className="garden-screen">
        <div className="row align-items-start">
          <div className="return-home-button">
            <Link to="/dashboard" className="return-home">Home</Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 header">
            <span className="garden-header-content">{user}'s Garden (^ᴗ^)۶</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 ml-2 home-image"></div>
          <div className="col-md-4 home-message-container align-items-start">
            <span className="home-message">Hey {user}, tap to view more or plant (◕ᴗ◕✿)</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="garden-container">
            <div className="grid-container">
              <div className="garden-row">
                <div className={plantClass} onClick={this.clickPlant}></div>
                <div className="plant-item"></div>
                <div className="plant-item"></div>
                <div className="plant-item"></div>
              </div>
              <div className="garden-row">
                <div className="plant-item"></div>
                <div className="plant-item"></div>
                <div className="plant-item"></div>
                <div className="plant-item"></div>
              </div>
              <div className="garden-row">
                <div className="plant-item"></div>
                <div className="plant-item"></div>
                <div className="plant-item"></div>
                <div className="plant-item"></div>
              </div>
              <div className="garden-row">
                <div className="plant-item"></div>
                <div className="plant-item"></div>
                <div className="plant-item"></div>
                <div className="plant-item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Garden;
