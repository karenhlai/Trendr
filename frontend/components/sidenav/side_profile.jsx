import React from 'react';

class SideProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    if (this.props.posts.length === 0) {
      return null;
    };

    let posts = this.props.posts.map( post => {
      return (
        <div>
          { post.title }
          { post.body }
        </div>
      )
    })

    return (
      <div className="side-profile-container">
        <div className="side-profile-nav">
        </div>

        <li><div className="user-view">
          <div className="background">
          </div>
          <a href="#name"><span className="white-text name">John Doe</span></a>
          <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
        </div></li>
        <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div className="divider"></div></li>
        <li><a className="subheader">Subheader</a></li>
        <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        <li><a className="sidenav-close" href="#!">Clicking this will close Sidenav</a></li>

        <div>
          { posts.reverse() }
        </div>
      </div>
    )
  }

};

export default SideProfile;