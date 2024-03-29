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
      plantMessageClicked: false,
      userName: '',
      plantsAvailable: ''
    };
    this._isMounted = false;
    this.getPlantClass = this.getPlantClass.bind(this);
    this.getGrids = this.getGrids.bind(this);
    this.handleGridClick = this.handleGridClick.bind(this);
    this.updatePlantClass = this.updatePlantClass.bind(this);
    this.handleTap = this.handleTap.bind(this);
    this.resetGarden = this.resetGarden.bind(this);
  }

  getGrids(gardenID){
    fetch(`/api/garden_items.php?garden_id=${gardenID}`)
      .then(res => res.json())
      .then(data => this.setState({
        plantGrids: this.state.plantGrids.concat(data)
      })
      )
      .catch(err => { console.log('There was an error:', err) });
  }

  componentDidMount(){
    this._isMounted = true;
    const gardenID = this.props.match.params.garden_id;
    this.getGrids(gardenID);
    if (this._isMounted) {
      fetch('/api/plants_available.php')
        .then(res => res.json())
        .then(data => {
          let plantsAvailable = Number.parseInt(data[0]['plants_available']);
          this.setState({
            plantsAvailable: plantsAvailable
          });
        });
    }
  }

  handleGridClick(value){
    if(value === true){
      this.setState({
        isClicked: true
      });
      return true;
    } else {
      return false;
    }
  }

  resetGarden(){
    fetch(`/api/reset_garden.php?garden_id=${this.props.gardenID}`)
    .then(() => {
      this.setState({
        plantGrids: []
      });
    });
  }

  handleTap(){
    if(this.state.plantsAvailable !== 0){
      this.setState({
        plantMessageClicked: true
      });
    }
  }

  getPlantClass(plantClassName){
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

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let plantClass = this.state.plantClass;
    let user = this.props.userName;
    let modalShow;
    if(this.state.plantMessageClicked !== false){
      modalShow = <GardenModal getPlantClass={this.getPlantClass} userName={user} plantModal={this.state.plantMessageClicked}/>;
    } else {
      modalShow = null;
    }

    const gridItems = this.state.plantGrids.map(grid => {
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
            <span className="clear-garden" onClick={this.resetGarden}>Clear Garden</span>
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
            <span className="home-message" onClick={this.handleTap}>Hey {user}, tap to view more or plant (◕ᴗ◕✿)</span>
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
