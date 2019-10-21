import React from "react";

class PlantDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="plant-details-screen">
        <div className="back-container">
          <div className="back-button">
            Back
          </div>
        </div>
        <div className="img-container">
          <div className="plantImg"></div>
        </div>
        <div className="info-container">
          <div className="succulent-icon-container">
            <div className="succulent-name"><strong>Succulent Name:</strong>The ganja plant</div>
          </div>
          <div className="date-container">
            <div className="date-planted"><strong>Date Planted:</strong> 10/17/2019</div>
          </div>
          <div className="goal-origin-container">
            <div className="goal-origin"><strong>Earned From Goal:</strong> Eating my vegetables</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlantDetails;
