import React from 'react';
// import { merge } from 'react'
import PostIndexItemContainer from './post_index_item_container';
import InfiniteScroll from 'react-infinite-scroller';
 
class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts};
    // debugger
    // this.postHandler = this.postHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts(); 
  }

  // refreshes state to get updates from post index item
  postDeleteHandler(id) {
    // merge new posts in old posts Object.assign
    // set this.state posts to new obj 
    // debugger
    this.deletePost(id).then( () => {
      let posts = this.state.posts.filter(post => id !== post.id);

      // debugger
      this.setState({
        posts: posts
      })
    });

  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.posts) {
      this.setState({ posts: nextProps.posts})
    }
  }

  render() {
    // console.log(this.props.posts)
    if (this.props.posts.length === 0 ) {
      return null;
    }
    // let posts = this.props.posts.map(post => {
    let posts = this.state.posts.map(post => {
      return (
        <PostIndexItemContainer
          key={post.id}
          post={post}
          user={this.props.users[post.author_id]}
          openModal={this.props.openModal}
          likePost={this.props.likePost}
          unlikePost={this.props.unlikePost}
          postDeleteHandler={this.postDeleteHandler}
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