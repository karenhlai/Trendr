import React from 'react';
import SplashPage from './splash_page';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import ReactFullpage from '@fullpage/react-fullpage'; //slider 

//section one will either hold splash or form
const SectionOne = () => {
  return (
    <div className="section section-one">
      <img src="http://cdn.artwallpaperhi.com/2560x1600/20121025/nature%20flowers%20bokeh%20red%20flowers%20poppies%202560x1600%20wallpaper_www.artwallpaperhi.com_12.jpg" />
      <div>
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/" component={SplashPage} />
        </Switch>
      </div>

      <button className="popup footer-slider" onClick={() => fullpage_api.moveSectionDown() }>
        <p>What is Trendr?</p>
      </button>
      
    </div>
  )
}


export default SectionOne;