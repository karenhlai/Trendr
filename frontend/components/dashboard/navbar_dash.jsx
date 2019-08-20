import React from 'react';
import { Link } from 'react-router-dom';
// import dashboard_home_icon from '../../../app/assets/images/dashboard_home.png';
import { logout } from '../../actions/session_actions';

class NavbarDash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar-dash">
        <section className="navbar-left-container">
          <a href="/">t</a>
        </section>

        <ul className="navbar-right-container">
          <li>
            {/* <Link to="/"> */}
            <a href="/">
              <i className="fas fa-home" />
            </a>
            {/* </Link> */}
          </li>

          <li className="account">
            <i className="fas fa-user" />
            <div className="account-dropdown-content">
                <ul>
                  <button onClick={() => this.props.logout()}>
                    <u>Logout</u>
                    </button>
                </ul>
                <ul>
                  <Link id="following-idx" to="/following" >
                    {/* <i className="fas fa-user-friends"></i> */}
                    Following
                  </Link>
                </ul>
            </div>
          </li>

          <li>
            <i className="fas fa-pencil-alt" onClick={() => this.props.openModal("AltCreatePost")} />
          </li>
        </ul>
      </nav>
    );
  }
};

export default NavbarDash;

