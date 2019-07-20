import React from 'react';
import PostIndexItemContainer from './post_index_item_container';
import InfiniteScroll from 'react-infinite-scroller';
 
class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts(); 
  }

  render() {
    if (this.props.posts.length === 0 ) {
      return null;
    }

    let posts = this.props.posts.map(post => {
      return (
        <PostIndexItemContainer
          key={post.id}
          user={this.props.users[post.author_id]}
          post={post}
          updatePost={this.props.updatePost}
          deletePost={this.props.deletePost}
          openModal={this.props.openModal}
          likePost={this.props.likePost}
          unlikePost={this.props.unlikePost}
        />
      );
    });

    // let username = this.props.currentUser.username;
    // debugger
    return (
      <div>
          { posts.reverse() }
      </div>
    );
  }
}

export default PostIndex;