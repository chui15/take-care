import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Auth from './auth';
import SignUpScreen from './sign-up';
import IntroScreen from './intro-screen';
import HomeScreen from './home-screen';
import GoalsList from './goals-list';
import GoalDetails from './goal-details';
import Garden from './garden';
import GardenModal from './garden-item-modal';
import TimerScreen from './timer-main';
import AddGoal from './add-goal';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      auth: true,
      userName: '',
      gardenID: ''
    };
    this._isMounted = false;
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.checkAuth();
  }

  checkAuth(){
    fetch('/api/check_auth.php')
      .then(resp => resp.json())
      .then(data => {
        if(data.auth === true){
          this.setState({auth: true});
          if(this.props.location.pathname === '/'){
            this.props.history.push('/dashboard');
          }
        } else {
          throw new Error('Not logged in');
        }
      })
      .catch(error => {
        this.setState({ auth: false });
      });
  }

  componentDidMount(){
    this.is_Mounted = true;
  }

  componentWillUnmount(){
    this.is_Mounted = false;
  }

  getUserInfo() {
    fetch('/api/get_username.php')
      .then(res => res.json())
      .then(data => {
        if(this.is_Mounted){
          this.setState({
          userName: data[0]['name'],
          gardenID: Number.parseInt(data[1]['user-id'])
        })
      }
      console.log(this.state.gardenID);
    })
      .catch(err => console.error('fetch failed'));
  }

  logOut() {
    fetch('/api/logout.php')
      .then(() => {
        this.setState({
          auth: false
        });
      });
  }

  logIn(user) {
    fetch('/api/login.php', {
      method: 'POST',
      body: JSON.stringify(user)
    })
      .then(resp => resp.json()).then(data => {
        if(data.error) throw new Error(data.error)
        this.setState({
          auth: true
        }, () => {
          this.props.history.push('/dashboard');
        });
        this.getUserInfo();
      }).catch(err => { console.log('There was an error:', err) });
  }

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
            <Auth auth={auth} redirect="/" component={HomeScreen} logOut={this.logOut} userName={this.state.userName}/>
          </Route>
          <Route path="/goals" exact>
            <Auth auth={auth} redirect="/" component={GoalsList} userName={this.state.userName} gardenID={this.state.gardenID}/>
          </Route>
          <Route path="/goals/details"></Route>
          <Route path="/goals/:goal_id/details" component={GoalDetails}/>
          <Route path="/goals/add">
            <Auth auth={auth} redirect="/" component={AddGoal}/>
          </Route>
          <Route path="/garden/:garden_id">
            <Auth auth={auth} redirect="/" component={Garden} userName={this.state.userName}/>
          </Route>
          <Route exact path="/timer">
            <Auth auth={auth} redirect="/" component={TimerScreen} userName={this.state.userName} />
          </Route>
          <Route path="/timer/:goal_id">
            <Auth auth={auth} redirect="/" component={TimerScreen} userName={this.state.userName} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
