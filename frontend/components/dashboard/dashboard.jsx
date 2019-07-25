import React from 'react';
import NavbarDash from './navbar_dash';
import CreateBar from './create_bar';
import PostIndexContainer from '../posts/post_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  };


  render() {
    return (
      <div>
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
              <a href="/">
                <i className="fas fa-user" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-pencil-alt" />
              </a>
            </li>
            <li>
              <button onClick={() => this.props.logout()}>
                <i className="fas fa-sign-out-alt" />
              </button>
            </li>
          </ul>
        </nav>

        <div className="dashboard-main">
          <CreateBar />
          <PostIndexContainer />
        </div>
      </div>
    );
  };
}

export default Dashboard;