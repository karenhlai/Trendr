import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './splash_page/session_form/login_form_container';
import SignupFormContainer from './splash_page/session_form/signup_form_container';
import LandingPage from './splash_page/landing_page';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashPage from './splash_page/splash_page';
import PostIndexContainer from './posts/post_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
      <header>
      	{/* <h1>Tumblr Project</h1>
        <GreetingContainer /> */}
      </header>

    <Switch>
      <ProtectedRoute path="/posts" component={PostIndexContainer} />
      <Route path="/" component={SplashPage} /> 
    </Switch>


    </div>
);

export default App;