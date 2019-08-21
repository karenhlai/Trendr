import React from 'react';
// import { merge } from 'react'
import PostIndexItemContainer from './post_index_item_container';
import InfiniteScroll from 'react-infinite-scroller';
 
class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts};
    // debugger
    this.postHandler = this.postHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts(); 
  }

  postHandler(id) {
    // merge new posts in old posts Object.assign
    // set this.state posts to new obj 
    let posts = this.state.posts.filter(post => id !== post.id);
    
    // debugger
    this.setState({
      posts: posts
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.posts) {
      this.setState({posts: nextProps.posts})
    }
  }



  render() {
    console.log(this.state)
    if (this.props.posts.length === 0 ) {
      return null;
    }
    let posts = this.state.posts.map(post => {
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
          postHandler={this.postHandler}
        />
      );
    });

    // debugger
    return (
      <div>
        { posts.reverse() }
      </div>
    );
  }
}

export default PostIndex;