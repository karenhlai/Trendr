import React from 'react';
import { Link } from 'react-router-dom';

class landingPage extends React.Component {
  render () {
    return (
      <div>
        <Link to="/signup">Get Started</Link>
        <Link to="/login">Log In</Link>
      </div>
    )
  }
}

export default landingPage;

