import React from 'react';

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
          <li key={user.id}>
            { followingName }
            { followingAvatar }
          </li>
        )
      }
    })

    return (
      <div>
        Following Index 
        {following}
      </div>
    );
  }
};

export default FollowingIndex;