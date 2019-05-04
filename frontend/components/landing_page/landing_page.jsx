import React from 'react';
import { Link } from 'react-router-dom';

class landingPage extends React.Component {
  render () {
    return (
      <div className="container">
        <h1 className="splashHeader">tumblr</h1>


        <button className="landingButtons">
          <Link to="/signup"><p className="getStarted">Get Started</p></Link>
        </button> 
        <br />
        <button className="landingButtons">
          <Link to="/login"><p className="logIn">Log In</p></Link>
        </button>
      </div>
    )
  }
}

export default landingPage;

