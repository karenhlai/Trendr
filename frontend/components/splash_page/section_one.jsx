import React from 'react';
import LandingPage from './landing_page';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import ReactFullpage from '@fullpage/react-fullpage'; //slider 

const SectionOne = () => {
  return (
    <div className="section section-one">
      <img src="http://cdn.artwallpaperhi.com/2560x1600/20121025/nature%20flowers%20bokeh%20red%20flowers%20poppies%202560x1600%20wallpaper_www.artwallpaperhi.com_12.jpg" />
      <div className="loginform">
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/" component={LandingPage} />
        </Switch>
      </div>

      <div className="popup footer-slider">
        <button className="section-one-footer" onClick={() => fullpageApi.moveSectionDown()}>
          <p>What is Trendr?</p>
        </button>
      </div>
      
    </div>
  )
}


export default SectionOne;