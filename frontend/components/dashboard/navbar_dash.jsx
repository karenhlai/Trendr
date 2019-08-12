import React from 'React';
import { Link } from 'react-router-dom';
// import dashboard_home_icon from '../../../app/assets/images/dashboard_home.png';
import { logout } from '../../actions/session_actions';

class NavbarDash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id="navbar-dash">
        <section className="navbar-left-container">
          <a href="/">t</a>
        </section>

        <ul className="navbar-right-container">
          <li>
            <a href="/">
              <i className="fas fa-home" />
            </a>
          </li>
          <li>
            {/* open currentSessionUser sideNav here */}
            <a href="/">
              <i className="fas fa-user" />
            </a>
          </li>
          <li>
              <i className="fas fa-pencil-alt" onClick={() => this.props.openModal("AltCreatePost")} />
          </li>
          <li>
              <i className="fas fa-sign-out-alt" onClick={() => this.props.logout()}/>
          </li>
        </ul>
      </nav>
    );
  }
};

export default NavbarDash;

