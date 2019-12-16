import React from 'react';
import NavbarDashContainer from '../dashboard/navbar_dash_container';

class FollowingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }
  
  render () {
    const users = this.props.users; 
    const currentUser = this.props.currentUser;

    let following = users.map(user => {
      if (currentUser.followings.includes(user.id)) {
        let followingName = user.username;
        let followingAvatar = <img src={user.avatarUrl} />;
        return (
          <div key={user.id}>
              {followingAvatar}

            <div className="following-name">
              {followingName}
            </div>
            <button className="following-button" onClick={() => this.props.unfollow(user.id)}>
              {/* <i class="fas fa-minus"></i> */}
              Unfollow
            </button>
          </div>
        )
      }
    });
    // debugger
    return (
      <div>
        <NavbarDashContainer />
        <div className="following-index-container">
          <h2>
            Following Users
          </h2>
        
          <div className="following-index">
            {following}
          </div>

          {/* <i className="fas fa-angle-down"></i> */}
        </div>
      </div>
    );
  }
};

export default FollowingIndex;