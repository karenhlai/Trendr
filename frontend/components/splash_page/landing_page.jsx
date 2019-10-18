import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render () {
    return (
      <div className="login-form-container">
        <h1 className="splash-header">trendr</h1>
        <h6 className="splash-sub">
          Come for what you love.
          <br/>
          Stay for what you discover.
        </h6>

        <Link to="/signup"><p className="session-button">Get Started</p></Link>
        <Link to="/login"><p className="session-button">Log In</p></Link>
      </div>
    )
  }
}

export default LandingPage;

