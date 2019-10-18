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
            <div className="succulent-name">Succulent:</div>
            <span>small icon</span>
          </div>
          <div className="date-container">
            <div className="date-planted">Date Planted:</div>
          </div>
          <div className="goal-origin-container">
            <div className="goal-origin">Earned From Goal:</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlantDetails;
