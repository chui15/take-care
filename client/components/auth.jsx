import React from 'react';
import { withRouter } from 'react-router-dom';

class Auth extends React.Component {
  constructor(props){
    super(props);

    console.log('Auth Constructor:', this.props);

    this.checkAuth();
  }

  componentDidUpdate(){
    this.checkAuth();
  }

  checkAuth(){
    const { auth = false, redirect = '/', history } = this.props;

    if (!auth) {
      history.push(redirect);
    }
  }

  render(){
    const { component: Component, ...props } = this.props;

    return <Component {...props}/>
  }
}

export default withRouter(Auth);
