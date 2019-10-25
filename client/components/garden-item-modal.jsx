import React from 'react';

class GardenModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
      plantModal: true
    };
    this.close = this.close.bind(this);
    this.handleAloe = this.handleAloe.bind(this);
    this.handleBlueberry = this.handleBlueberry.bind(this);
    this.handleMoonCactus = this.handleMoonCactus.bind(this);
    this.handleBallCactus = this.handleBallCactus.bind(this);
  }

  close(){
    this.setState({
      plantModal: false
    });
  }

  handleAloe(event){
    let plantClass = 'succulent1';
    this.setState({
      isClicked: true
    });
    this.props.getPlantClass(plantClass);
    var timeout = window.setTimeout(this.close,[1000]);
  }

  handleBlueberry(event) {
    let plantClass = 'succulent2';
    this.setState({
      isClicked: true
    });
    this.props.getPlantClass(plantClass);
    var timeout = window.setTimeout(this.close, [1000]);
  }

  handleMoonCactus(event) {
    let plantClass = 'succulent3';
    this.setState({
      isClicked: true
    });
    this.props.getPlantClass(plantClass);
    var timeout = window.setTimeout(this.close, [1000]);
  }

  handleBallCactus(event) {
    let plantClass = 'succulent4';
    this.setState({
      isClicked: true,
    });
    this.props.getPlantClass(plantClass);
    var timeout = window.setTimeout(this.close, [1000]);
  }

  render() {
    let user = localStorage.getItem('UserName');
    let showModal = this.state.plantModal ? 'modal-plant-item' : 'hidden';
    return (
          <div className={showModal} >
            <div className="modal-header garden-modal">
              <h5 className="modal-title garden-modal-title">Hey {user}, choose a plant (◕▿◕✿)</h5>
                <button type="button" className="close-plant" onClick={this.close}></button>
              </div>
                <div className="row justify-content-center">
                  <div className="succulent1 highlight-plant" onClick={this.handleAloe}></div>
                  <div className="succulent2 highlight-plant" onClick={this.handleBlueberry}></div>
                  <div className="succulent3 highlight-plant" onClick={this.handleMoonCactus}></div>
                  <div className="succulent4 highlight-plant" onClick={this.handleBallCactus}></div>
              </div>
            </div>
    );
  }
}

export default GardenModal;
