import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import NavBarSplash from './nav_bar_splash';
import ReactFullpage from '@fullpage/react-fullpage';

class SplashPage extends React.Component {
  render () {
    return (
      <div> 

        <div className="navbarSplash">
          <NavBarSplash />        
        </div>


        <ReactFullpage
          navigation

          render={({ state, fullpageApi }) => 
            <ReactFullpage.Wrapper>
              <div className="section section-one">
                <img src="https://i.pinimg.com/originals/ee/41/a3/ee41a360bf1ef5c03a79b73c9220156d.jpg" />
                <div className="loginform">
                  <Switch>
                    <AuthRoute path="/login" component={LoginFormContainer} />
                    <AuthRoute path="/signup" component={SignupFormContainer} />
                    {/* AuthRoute path="/" component={} */}
                    {/* <ProtectedRoute path="/" component={GreetingContainer} /> */}
                    {/* <Redirect to="/" /> */}
                  </Switch>
                </div>
                <button className="section-one-button" onClick={() => fullpageApi.moveSectionDown()}>
                  What is Tumblr?
                </button>
              </div>
              <div className="section section-two">
                <img src="https://i.pinimg.com/originals/ee/41/a3/ee41a360bf1ef5c03a79b73c9220156d.jpg" />

                <h1>Tumblr is so easy to use that it's hard to explain.</h1>
              </div>
              <div className="section section-three">
                <img src="https://i.pinimg.com/originals/ee/41/a3/ee41a360bf1ef5c03a79b73c9220156d.jpg" />

                <h1>Tumblr is blogs.</h1>
              </div>
              <div className="section section-four">
                <img src="https://i.pinimg.com/originals/ee/41/a3/ee41a360bf1ef5c03a79b73c9220156d.jpg" />

                <h1>You already know how this works.</h1>
              </div>
              <div className="section section-five">
                <img src="https://i.pinimg.com/originals/ee/41/a3/ee41a360bf1ef5c03a79b73c9220156d.jpg" />

                <h1>Seriously, put anything you want here.</h1>
              </div>
              <div className="section section-six">
                <img src="https://i.pinimg.com/originals/ee/41/a3/ee41a360bf1ef5c03a79b73c9220156d.jpg" />

                <h1>Okay, it's not actually hard to explain.</h1>
              </div>
             
          </ReactFullpage.Wrapper>
          }
        />
      </div>
    )
  }
}
export default SplashPage;