import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Auth from './auth';
import SignUpScreen from './sign-up';
import IntroScreen from './intro-screen';
import HomeScreen from './home-screen';
import GoalsList from './goals-list';
import GoalDetails from './goal-details';
import EditGoal from './edit-goal';
import Garden from './garden';
import GardenModal from './garden-item-modal';
import TimerScreen from './timer-main';
import AddGoal from './add-goal';
import PlantDetails from "./plant-details";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      auth: false
    }
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  logOut() {
    fetch('/api/logout.php')
      .then(() => {
        this.setState({
          auth: false
        });
      });
    console.log('user logged out');
  }

  logIn(user) {
    fetch('/api/login.php', {
      method: 'POST',
      body: JSON.stringify(user)
    })
      .then(resp => resp.json()).then(data => {
        console.log('Login Data:', data);
        console.log('user logged in');
        if(data.error) throw new Error(data.error)
        this.setState({
          auth: true
        }, () => {
          this.props.history.push('/dashboard');
        });
      }).catch(err => { console.log('There was an error:', err) });
  }

  // logIn(){
  //   fetch('/api/login.php')
  //     .then((resp) => {
  //       console.log('Resp:', resp);
        // this.setState({
        //   auth: true
        // }, () => {
        //   this.props.history.push('/dashboard');
        // });

  //     }).catch(err => {console.log('There was an error:', err)});
  //   console.log('user logged in');
  // }

  render(){
    const { auth } = this.state;

    return (
      <div className="">
        <Switch>
          <Route path="/" exact>
            <IntroScreen logIn={this.logIn}/>
          </Route>
          <Route path="/signup">
            <SignUpScreen />
          </Route>
          <Route path="/dashboard">
            <Auth auth={auth} redirect="/" component={HomeScreen} logOut={this.logOut}/>
          </Route>
          <Route path="/goals" exact>
            <Auth auth={auth} redirect="/" component={GoalsList}/>
          </Route>
          <Route path="/goals/details">
            <Auth auth={auth} redirect="/" component={GoalDetails} />
          </Route>
          <Route path="/goals/add">
            <Auth auth={auth} redirect="/" component={AddGoal}/>
          </Route>
          <Route path="/garden/:garden_id">
            <Auth auth={auth} redirect="/" component={Garden} />
          </Route>
          <Route path="/timer" component={TimerScreen} exact />
          <Route path="/timer/:goal_id" component={TimerScreen} exact/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
