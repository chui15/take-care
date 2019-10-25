import React from 'react';
import { Link } from 'react-router-dom';
import GardenModal from './garden-item-modal';
import GardenItem from './garden-item';

class Garden extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      plantClass: '',
      plantGrids: [],
      plantMessageClicked: false
    };
    this.getPlantClass = this.getPlantClass.bind(this);
    this.getGrids = this.getGrids.bind(this);
    this.handleGridClick = this.handleGridClick.bind(this);
    this.updatePlantClass = this.updatePlantClass.bind(this);
    // this.resetGarden = this.resetGarden.bind(this);
  }

  getGrids(){
    fetch('/api/garden_items.php?garden_id=1')
      .then(res => res.json())
      .then(data => this.setState({
        plantGrids: this.state.plantGrids.concat(data)
      }));
  }

  componentDidMount(){
    this.getGrids();
  }

  handleGridClick(value){
    if(value === true){
      console.log('grid clicked!');
      this.setState({
        isClicked: true
      });
      return true;
    } else {
      return false;
    }
  }

  // resetGarden(baseClass){
  //   fetch('/api/reset_garden.php?garden_id=1',
  //   {method: 'POST',
  //   body: JSON.stringify(baseClass),
  //   headers: {'Content-type' : 'application/json'}})
  // }

  handleTap(){
    this.setState({
      plantMessageClicked: true
    });
    console.log('hi');
    return true;
  }

  getPlantClass(plantClassName){
    console.log(plantClassName);
    this.setState({
      plantClass: plantClassName
    });
  }

  updatePlantClass(newClass) {
    newClass.className = this.state.plantClass;
    fetch('/api/garden_item_class.php',
    { method: 'POST',
    body: JSON.stringify(newClass),
    headers: { 'Content-type': 'application/json' } })
    return this.state.plantClass;
  }

  render() {
    let plantClass = this.state.plantClass;
    let user = localStorage.getItem('UserName');
    let modalShow;
    if(!this.state.plantMessageClicked === false){
      modalShow = <GardenModal getPlantClass={this.getPlantClass} />
    } else {
      modalShow = null
    }

    const gridItems = this.state.plantGrids.map(grid => {
        // let plantID = grid['plant-id']
        return (
          <GardenItem key={grid.id} {...grid} isClicked={() => { this.handleGridClick() }} updatePlantClass={this.updatePlantClass} />
        );
      })

    return (
      <div className="garden-screen">
        <div className="row">
          <div className="return-home-button align-self-start">
            <Link to="/dashboard" className="return-home">Home</Link>
          </div>
          <div className="col-5 clear-garden-button align-self-end">
            <span className="clear-garden">Clear Garden</span>
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
                { gridItems }
              </div>
            </div>
          </div>
        </div>
        <div>
          { modalShow }
        </div>
      </div>
    );
  }
}

export default Garden;
