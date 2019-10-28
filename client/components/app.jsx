import React from 'react';
import {Switch, Route} from 'react-router-dom';
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
      auth: true
    }
  }

  render(){
    const { auth } = this.state;

    return (
      <div className="">
        <Switch>
          <Route path="/" exact>
            <IntroScreen />
          </Route>
          <Route path="/signup">
            <SignUpScreen />
          </Route>
          <Route path="/dashboard">
            <HomeScreen />
          </Route>
          <Route path="/goals" exact>
            <Auth auth={auth} redirect="/signup" component={GoalsList}/>
          </Route>
          <Route path="/goals/details">
            <GoalDetails />
          </Route>
          <Route path="/goals/:goal_id/edit">
            <EditGoal/>
          </Route>
          <Route path="/goals/add">
            <Auth auth={auth} component={AddGoal}/>
          </Route>
          <Route path="/garden/:garden_id">
            <Garden />
          </Route>
          <Route path="/timer" exact>
            <TimerScreen />
          </Route>
          <Route path="/plantdetails">
            <PlantDetails />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
