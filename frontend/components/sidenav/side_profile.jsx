// import React from 'react';
// import { Link } from 'react-router-dom';

// class SideProfile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       sideProfileUsername: null,
//     };
//   }

//   componentDidMount() {
//     // this.props.fetchPosts();
//   }

//   render() {
//     let targetUsername = `${this.props.targetUser.username}.trendr.com`;
//     // debugger
//     return (
      // <ul id="slide-out" className="sidenav">
      //   <div className="side-profile-nav">
      //     <div className="side-name">{ targetUsername }</div>
      //   </div>

      //   <div className="side-profile-posts post-index-item">
      //     {/* {posts.reverse()} */}
      //   </div>


      //   <li><div className="user-view">
      //     <div className="background">
      //     </div>
      //     <a href="#name"><span className="white-text name">John Doe</span></a>
      //     <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
      //   </div></li>

      //   <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
      //   <li><a href="#!">Second Link</a></li>
      //   <li><div className="divider"></div></li>
      //   <li><a className="subheader">Subheader</a></li>
      //   <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
      //   <li><a className="sidenav-close" href="#!">Clicking this will close Sidenav</a></li>
      // </ul>
//     )
//   }

// };

// export default SideProfile;

import React from 'react';
const SideProfile = (props) => {
  return (
    <ul id="slide-out" className="sidenav">
      <div className="side-profile-nav">
        <div className="side-name">{props.targetUser.user}</div>
      </div>

      <div className="side-profile-posts post-index-item">
        {/* {posts.reverse()} */}
      </div>


      <li><div className="user-view">
        <div className="background">
        </div>
        <a href="#name"><span className="white-text name">{props.targetUser.email}</span></a>
        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
      </div></li>

      <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><div className="divider"></div></li>
      <li><a className="subheader">Subheader</a></li>
      <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
      <li><a className="sidenav-close" href="#!">Clicking this will close Sidenav</a></li>
    </ul>
  )
};

export default SideProfile;