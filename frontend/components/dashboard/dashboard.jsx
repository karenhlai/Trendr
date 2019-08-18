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

  handleFollow() {
    this.props.follow(user.id)
  }

  render() {
    let currentUser = this.props.currentUser;

    let recommended = this.props.users.map(user => {
      // if (currentUser.id != user.id && !user.followers.includes(currentUser.id)) {
      if (currentUser.id != user.id && !currentUser.followings.includes(user.id)) {
        let recAvatar = <img className="rec-avatar" src={user.avatarUrl} />;
        let recUsername = user.username;
        let recName = `${user.username}.trendr.com`;
        let recButton = <button className="recButton" onClick={() => this.props.follow(user.id)}><i className="follow-plus fas fa-plus-square" /></button>;
      
        return (
          <li className="rec-list-container" key={user.id}>
            <div className="rec-list-left">
              {recAvatar}
              <div className="rec-list-center">
                <div className="recUsername">{recUsername}</div>
                {/* <br /> */}
                {recName}
              </div>
            </div>

            {recButton}
          </li>
        )
      }
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
            <div className="recommend-container">
              <h2>Recommended Blogs</h2>
              { recommended }
            </div>

            <div className="radar-container">
              <h2>Radar</h2>
              {/* needs a user and that user's post to render (post cannot be currentUser or following's post; 
            and post cannot be currently liked by currentUser) */}
              {/* put a follow button on user, using above's CSS className's */}

            </div>

            <ul>
              <a href="/"> <i class="fab fa-github-square"></i> </a>
              {/* <a href="/"> Link </a> */}
              {/* <a href="/"> Link </a> */}
              <a href="/"> <i class="fab fa-linkedin"></i> </a>
            </ul>
          </div>
        </div>

      </div>
    );
  };
}

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id];
  const users = Object.values(state.entities.users);
  // const users = state.entities.users;
  const posts = Object.values(state.entities.posts);
  return ({
    currentUser,
    users, 
    posts
  });
};

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  follow: (user) => dispatch(follow(user)),
  unfollow: (user) => dispatch(unfollow(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);