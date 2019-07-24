import React from 'React';
import { Link } from 'react-router-dom';
// import dashboard_home_icon from '../../../app/assets/images/dashboard_home.png';

class NavbarDash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id="navbar-dash">
        <a href="/">t</a>
        {/* SearchBar goes here */}
        <a href="/">
          <img src="https://assets.tumblr.com/images/tab_switching_dashboard_active.png?1" />
        </a>

        <button onClick={() => this.props.logout()}>Logout</button>
      </nav>
    );
  }
};

export default NavbarDash;

