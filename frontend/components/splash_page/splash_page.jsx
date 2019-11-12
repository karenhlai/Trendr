import React from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends React.Component {
  render () {
    return (
      <div className="splash-container login-form">
        <h1>trendr</h1>
        <h5>
          Come for what you love.
          <br/>
          Stay for what you discover.
        </h5>

        <Link to="/signup"><p id="session-button">Get Started</p></Link> <br />
        <Link to="/login"><p id="session-button">Log In</p></Link>
      </div>
    )
  }
}

export default SplashPage;

