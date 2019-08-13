import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions'
import NavbarDashContainer from './navbar_dash_container';
import CreateBar from './create_bar';
import PostIndexContainer from '../posts/post_index_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    // this.props.fetchAllUsers();
  }


  render() {
    let users = this.props.users.map(user => {
      return (
        <div key={user.id}>
          {user.username}
        </div>
      )
    });

    return (
      <div>
        <NavbarDashContainer />

        <div className="dashboard-main">
          <div className="dashboard-main-left">
            <CreateBar />
            <PostIndexContainer />
          </div>

          <div className="dashboard-main-right">
            <h1>Recommended Blogs</h1>
            { users }
          </div>


          <footer>
            Footer
          </footer>
        </div>

      </div>
    );
  };
}

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id];
  const users = Object.values(state.entities.users);
  // debugger
  return ({
    currentUser,
    users
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);