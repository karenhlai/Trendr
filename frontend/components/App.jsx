import React from 'react';
import LoginFormContainer from './splash_page/session_form/login_form_container';
import SignupFormContainer from './splash_page/session_form/signup_form_container';
import LandingPage from './splash_page/landing_page';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashPage from './splash_page/splash_page';
import Dashboard from './dashboard/dashboard';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PostFormModal from '../components/posts/post_form_modal';
import AOS from 'aos';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    AOS.init({
      duration: 800
    })
  }

  render () {
    return(
     <div> 
      <header>
      </header>
      
      <Switch>
        <ProtectedRoute path="/posts" component={Dashboard} />
        <Route path="/" component={SplashPage} /> 
      </Switch>
    </div>
  )};
};

export default App;