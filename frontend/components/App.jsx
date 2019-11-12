import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import LandingContainer from './splash_page/landing_container';
import DashboardContainer from './dashboard/dashboard';
import FollowingIndexContainer from './follows/following_index_container';
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
        <Route path="/" component={LandingContainer} /> 
      </Switch>
    </div>
  )};
};

export default App;