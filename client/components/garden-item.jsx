import React from 'react';

class GardenItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked: false
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
      id: this.props.grid.id
    };
    console.log(plantClass);
    this.props.updatePlantClass(plantClass);
  }

  render(){
    // let plantClass = this.state.isClicked ? this.props.plantClass : 'plant-item';
    let plantClass = this.props.plantClass;
    return (
      <div className={plantClass} onClick={this.handleGridClick}></div>
    );
  }
}

export default GardenItem;
