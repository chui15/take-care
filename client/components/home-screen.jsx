import React from 'react';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="home-screen">
        <div className="row justify-content-center">
          <div className="col-9 header">
            <span className="header-content">Take Care (･ω･*⊂)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
