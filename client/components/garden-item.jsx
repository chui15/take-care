import React from 'react';

class GardenItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false,
      plantClass: this.props.plantClass
    };
    this.handleGridClick = this.handleGridClick.bind(this);
  }

  handleGridClick(){
    console.log('grid clicked');
    this.setState({
      isClicked: true
    });
    this.props.isClicked(this.state.isClicked);
    let plantClass = {
      id: this.props.id
    };
    const classForPlant = this.props.updatePlantClass(plantClass);
    this.setState({plantClass: classForPlant});
  }

  render(){
    // let plantClass = this.state.isClicked ? this.props.plantClass : 'plant-item';
    // let plantClass = this.props.plantClass;
    return (
      <div className={this.state.plantClass} onClick={this.handleGridClick}></div>
    );
  }
}

export default GardenItem;
