import React from 'react';
import { Link } from 'react-router-dom';

class Garden extends React.Component {

  render() {
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
      </div>
    );
  }
}

export default Garden;
