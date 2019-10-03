import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render () {
    return (
      <div className="login-form-container">
        {/* reuse login styling */}
        <h1 className="splash-header">trendr</h1>
        <h6 className="splash-sub">
          Come for what you love.
          <br/>
          Stay for what you discover.
        </h6>


        {/* <div> */}
          <button className="home-button">
            <Link to="/signup"><p className="session-button">Get Started</p></Link>
          </button> 
          {/* <br /> */}
          <button className="home-button">
            <Link to="/login"><p className="session-button">Log In</p></Link>
          </button>
        {/* </div> */}
      </div>
    )
  }
}

export default LandingPage;

