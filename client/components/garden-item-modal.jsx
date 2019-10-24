import React from 'react';

class GardenModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked: true
    };
    this.close = this.close.bind(this);
    this.handleAloe = this.handleAloe.bind(this);
    this.handleBlueberry = this.handleBlueberry.bind(this);
    this.handleMoonCactus = this.handleMoonCactus.bind(this);
    this.handleBallCactus = this.handleBallCactus.bind(this);

  }

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
    let initialClass = this.state.isClicked ? 'modal-plant-item': 'hidden';
    let selectPlate = this.state.isClicked ? 'highlight-plant' : 'hidden'
    return (
          <div className={initialClass} >
            <div className="modal-header">
              <h5 className="modal-title">Pick a plant</h5>
              <button type="button" className="close-plant" onClick={this.close}> &times;</button>
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
