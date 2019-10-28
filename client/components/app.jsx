import React from 'react';
import {Switch, Route} from 'react-router-dom';
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

  render(){
    return (
      <div className="">
        <Switch>
          <Route path="/" exact>
            <IntroScreen />
          </Route>
          <Route path="/dashboard">
            <HomeScreen />
          </Route>
          <Route path="/goals" exact>
            <GoalsList />
          </Route>
          <Route path="/goals/details">
            <GoalDetails />
          </Route>
          <Route path="/goals/:goal_id/edit">
            <EditGoal/>
          </Route>
          <Route path="/goals/add">
            <AddGoal />
          </Route>
          <Route path="/garden/:garden_id">
            <Garden />
          </Route>
          <Route path="/timer" component={TimerScreen} exact />
          <Route path="/timer/:goal_id" component={TimerScreen} exact/>
          <Route path="/plantdetails">
            <PlantDetails />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
