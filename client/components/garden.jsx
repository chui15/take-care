import React from 'react';

class Garden extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="garden-screen">
        <div className="row justify-content-center">
          <div className="col-8 header">
            <span className="garden-header-content">Jan’s Garden (^ᴗ^)۶</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Garden;
