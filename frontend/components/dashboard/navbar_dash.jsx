import React from 'react';
import { Link } from 'react-router-dom';
// import dashboard_home_icon from '../../../app/assets/images/dashboard_home.png';
import { logout } from '../../actions/session_actions';
import AccountDropdown from './account_dropdown';

class NavbarDash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [
      {
        id: 0,
        label: <button onClick={() => this.props.logout()}>
                Logout
              </button>,
      },
      {
        id: 1,
        label: <Link to="/following" >
                <i className="fas fa-user-friends"></i>
                Follows
              </Link>,
      }
    ];

    return (
      <nav className="navbar-dash">
        <section className="navbar-left-container">
          <a href="/">t</a>
        </section>

        <div className="navbar-right-container">
          <div>
            <a href="/">
              <i className="fas fa-home" />
            </a>
          </div>

          <AccountDropdown
            title={<i className="fas fa-user" />}
            list={list}
          />

          <div>
            <i className="fas fa-pencil-alt" onClick={() => this.props.openModal("AltCreatePost")} />
          </div>
        </div>
      </nav>
    );
  }
};

export default NavbarDash;

// <li className="account-dropdown"> 
//   <i className="fas fa-user" />
//   <div className="account-dropdown-content">
//     <div>
//       <button onClick={() => this.props.logout()}>
//         <p>Logout</p>
//       </button>
//     </div>
//     <div>
// <Link to="/following" >
//   {/* <i className="fas fa-user-friends"></i> */}
//   <p>
//     Following
//   </p>
// </Link>
//     </div>
//   </div>
// </li>