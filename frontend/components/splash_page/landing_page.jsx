import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render () {
    return (
      <div className="home-container">
        <h1 className="splash-header">tumblr</h1>
        <h6 className="splash-sub">Come for what you love.
          <br/>Stay for what you discover.</h6>
        <div className="center">
        <button className="home-button">
          <Link to="/signup"><p className="register-button">Get Started</p></Link>
        </button> 
        <br />
        <button className="home-button">
          <Link to="/login"><p className="login-button">Log In</p></Link>
        </button>
        </div>
      </div>
    )
  }
}

export default LandingPage;

