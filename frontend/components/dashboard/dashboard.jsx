import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions'
import { follow, unfollow } from '../../actions/follow_actions';
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
    let currentUser = this.props.currentUser;
    let recommended = this.props.users.map(user => {
      // let userAvatar;
      // if (!currentUser.followings.includes(currentUser.id)) {
        // userAvatar = <div>You shouldn't be able to see this!</div> 
        // userAvatar = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodU8a0j7tQxFglkdkS6JYVX4o3IXl92YWHYW4wvqg2WvAYSVE" />;
      // }
      return (
        <div key={user.id}>
          {/* { userAvatar } */}
          { user.username }
          <button onClick={() => this.props.follow(user.id)}><i className="follow-plus fas fa-plus-square"/></button>
        </div>
      )
    });
    // debugger
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
            { recommended }
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
  follow: (user) => dispatch(follow(user)),
  unfollow: (user) => dispatch(unfollow(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);