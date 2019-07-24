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

        <a href="/">
          <i class="fas fa-home" />
        </a>

        <a href="/">
          <i class="fas fa-user" />
        </a>

        <a href="/">
          <i class="fas fa-pencil-alt" />
        </a>

        <button onClick={() => this.props.logout()}>
          <i class="fas fa-sign-out-alt" />
        </button>
      </nav>
    );
  }
};

export default NavbarDash;

