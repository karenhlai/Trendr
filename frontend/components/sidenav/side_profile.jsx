import React from 'react';
import { Link } from 'react-router-dom';

class SideProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      sideProfileUsername: null,
    };
  }

  componentDidMount() {
    // this.props.fetchPosts();
  }

  render() {
    let targetUser = this.props.targetUser.username;
    return (
      <ul id="slide-out" className="sidenav">
        <div className="side-profile-nav">
          {/* <div className="side-name">{ targetUser }</div> */}
        </div>

      </ul>
    )
  }

};

export default SideProfile;