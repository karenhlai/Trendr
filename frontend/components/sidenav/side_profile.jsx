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

        <div>
          { posts.reverse() }
        </div>
      </div>
    )
  }

};

export default SideProfile;