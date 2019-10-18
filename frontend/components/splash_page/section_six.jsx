import React from 'react';
import LandingPage from './landing_page';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const SectionSix = () => {
  return (
    <div className="section section-six">
      <img src="http://cdn.artwallpaperhi.com/2560x1600/20121025/nature%20flowers%20bokeh%20red%20flowers%20poppies%202560x1600%20wallpaper_www.artwallpaperhi.com_12.jpg" />
      <h1 className="session-six-header">Okay, it's not actually hard to explain.</h1>
      <div className="loginform">
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/" component={LandingPage} />
        </Switch>
      </div>
    </div>
  )
}

export default SectionSix;