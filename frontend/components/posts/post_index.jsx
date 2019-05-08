import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import CreatePostNavbar from './create_post_navbar';
import PostIndexItem from './post_index_item';
 
class PostIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  mountOwnPosts() {
    this.props.fetchOwnPosts(this.props.currentUser.id);
  }

  mountLikedPosts() {
    this.props.fetchLikedPosts(this.props.currentUser.id);
  }

  // mountContent(currentUserId, username) {
  
  // }

  render() {
    if (this.props.posts === undefined) {
      return null;
    }
    let posts = this.props.posts.map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post}
          updatePost={this.props.updatePost}
          deletePost={this.props.deletePost} 
          />
      );
    });

    let username = this.props.currentUser.username;
    // let content = this.mountContentMedia(currentUserId, username);

    return (
      <div>
        <CreatePostNavbar />
        { username }
        { posts }
      </div>
    );
  }
}

export default PostIndex;
