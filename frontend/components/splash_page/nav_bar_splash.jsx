import React from 'react';
import { Route } from 'react-router-dom';

class NavBarSplash extends React.Component { 
  render () {
    return (
      <div>
        <header className="navBarHeader"> 
          <a href="/"><img src="http://cdn.onlinewebfonts.com/svg/download_426978.png" /></a>
        </header>
      </div>
    )
  }
}

export default NavBarSplash;