import React from 'react';
import LoginFormContainer from './splash_page/session_form/login_form_container';
import SignupFormContainer from './splash_page/session_form/signup_form_container';
import LandingPage from './splash_page/landing_page';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashPage from './splash_page/splash_page';
import DashboardContainer from './dashboard/dashboard';
import NavbarDashContainer from './dashboard/navbar_dash_container';
import FollowingIndexContainer from './follows/following_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AOS from 'aos';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    AOS.init({
      duration: 400, 
    })
  }

  render () {
    return(
     <div> 
      <Switch>
        <ProtectedRoute path="/posts" component={DashboardContainer} />
        <ProtectedRoute path="/following" component={FollowingIndexContainer} />
        <Route path="/" component={SplashPage} /> 
      </Switch>
    </div>
  )};
};

export default App;