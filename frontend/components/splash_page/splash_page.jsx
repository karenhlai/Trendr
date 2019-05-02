import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import NavBarSplash from './nav_bar_splash';



class SplashPage extends React.Component {
  render () {
    return (
      <div> 

        <div className="navbarSplash">
        <NavBarSplash />        
        </div>


        <section>
          <img className="section1img"/>
          <h1>Page 1</h1>

          <div className="loginform">
          <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            {/* <ProtectedRoute path="/" component={GreetingContainer} /> */}
            <Redirect to="/" />
          </Switch>
          </div>
        </section>


        <section><h1>Page 2</h1></section>
        <section><h1>Page 3</h1></section>
        <section><h1>Page 4</h1></section>
        <section><h1>Page 5</h1></section>
      </div>
    )
  }
}
export default SplashPage;