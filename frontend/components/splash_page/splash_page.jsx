import React from 'react';
import LandingPage from './landing_page';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import ReactFullpage from '@fullpage/react-fullpage';
import SectionThree from './section_three';
import SectionFour from './section_four';
import SectionFive from './section_five';

class SplashPage extends React.Component {
  render () {
    return (
      <div> 

        <div className="navbarSplash">
          <header className="navbar-header">
            <a href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAiCAYAAABfqvm9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDYtMjBUMTI6MTc6MTgtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDYtMjBUMTI6MTc6MTgtMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA2LTIwVDEyOjE3OjE4LTA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmM2ZDg3OGQ3LWQ1ZDctNGVlOC04ZWJiLTc2Zjk0NmFjZWQwOCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmZjMzExOTkxLWM3OTctYzQ0Yy1hYTg1LTUwYTgwYWM2ZTk0MCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFlMmUxZDA4LWQ0YzgtNDNkOS04NDU3LTQyMzJkZmIyYTFjNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MWUyZTFkMDgtZDRjOC00M2Q5LTg0NTctNDIzMmRmYjJhMWM3IiBzdEV2dDp3aGVuPSIyMDE4LTA2LTIwVDEyOjE3OjE4LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzZkODc4ZDctZDVkNy00ZWU4LThlYmItNzZmOTQ2YWNlZDA4IiBzdEV2dDp3aGVuPSIyMDE4LTA2LTIwVDEyOjE3OjE4LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0NmIwYTNlLWE4MWEtNzg0OS04OTJlLTBhNjdkNDQ1NjIwMDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtCi2F0AAAEKSURBVEjH7dU/K8VRGAfwUybKYDWavQFluMIt3sI1KMVgu7wCJUYr+cUogzKI27XZpDAYzCbZTEJ9DH63DPf3t7Nd33rG51Onc87zBIScmsI3vvCOT7+ZzeoJBeC6/lmsC+5ngM064AheY4Jt2akMTqSXEAUcwq38zJcFx/GkOI0icAxb+FAul9jDYVpHOMNywIF4OQ3oRgSTwQNPAnbxjA4ucJ1OmLzc4Tzt6aQ992j3e0ujBb+k8vgqA87FBpv/4ACAjdjgUhVwGG8F4E3VJfVQYhA8Yg0trGATC1ngcc1p080CW7HBsseuBE7HBgNmSjyhSmBvZ+/gJRbYq0msYhtJutyTP3WFjR9nA18dhY0ZsgAAAABJRU5ErkJggg==" /></a>
          </header>   
        </div>
        


        <ReactFullpage
          navigation
          licenseKey="05881909-CC18460F-993ADDFD-EF6A380A"
          render={({ fullpageApi }) => 
            <ReactFullpage.Wrapper>
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
              <div className="section section-two">
                <div className="content-text">
                  <h1 className="session-two-header">
                    Trendr is so easy to use <br />
                    that it's hard to explain.
                  </h1>
                  <p>
                    We made it really, really simple for people to make a blog
                    and put whatever they <br />want on it. Stories, photos, GIFs, TV
                    shows, links, quips, dumb jokes, smart jokes, <br />Spotify
                    tracks, mp3s, videos, fashion, art, deep stuff. Trendr is
                    466 million different <br />blogs, filled with literally whatever.
                  </p>
                </div>
                <img className="babybird" src="https://www.dailydot.com/wp-content/uploads/f3c/2c/db3b325ed46918ef.png" />
              </div>
              <SectionThree />
              <SectionFour />
              <SectionFive />
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
             
          </ReactFullpage.Wrapper>
          }
        />
      </div>
    )
  }
}
export default SplashPage;