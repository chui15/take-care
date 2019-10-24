import React from 'react';

class GardenModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.close = this.close.bind(this);
    this.handleAloe = this.handleAloe.bind(this);
    this.handleBlueberry = this.handleBlueberry.bind(this);
    this.handleMoonCactus = this.handleMoonCactus.bind(this);
    this.handleBallCactus = this.handleBallCactus.bind(this);
  }

  // handleTap(){
  //   console.log(this.props.isClicked);
  //   if (this.props.isClicked){
  //     this.setState({
  //       isClicked: true
  //     });
  //   } else {
  //     return false;
  //   }
  // }

  close(){
    this.setState({
      isClicked: false
    });
  }

  handleAloe(event){
    let plantClass = 'succulent1';
    this.setState({
      isClicked: true
    });
    this.props.getPlantClass(plantClass);
    this.close();
  }

  handleBlueberry(event) {
    let plantClass = 'succulent2';
    this.setState({
      isClicked: true
    });
    this.props.getPlantClass(plantClass);
    this.close();
  }

  handleMoonCactus(event) {
    let plantClass = 'succulent3';
    this.setState({
      isClicked: true
    });
    this.props.getPlantClass(plantClass);
    this.close();
  }

  handleBallCactus(event) {
    let plantClass = 'succulent4';
    this.setState({
      isClicked: true,
    });
    this.props.getPlantClass(plantClass);
    this.close();
  }

  render() {
    let user = localStorage.getItem('UserName');
    let initialClass = this.state.isClicked ? 'modal-plant-item': 'hidden';
    let selectPlate = this.state.isClicked ? 'highlight-plant' : 'hidden'
    return (
          <div className={initialClass} >
            <div className="modal-header garden-modal">
              <h5 className="modal-title garden-modal-title">Hey {user}, choose a plant (◕▿◕✿)</h5>
                <button type="button" className="close-plant" onClick={this.close}></button>
              </div>
                <div className="row justify-content-center">
                  <div className="succulent1" onClick={this.handleAloe}></div>
                  <div className="succulent2" onClick={this.handleBlueberry}></div>
                  <div className="succulent3" onClick={this.handleMoonCactus}></div>
                  <div className="succulent4" onClick={this.handleBallCactus}></div>
              </div>
            </div>
    );
  }
}

export default GardenModal;
