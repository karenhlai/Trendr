import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, fetchOwnPosts, fetchLikedPosts } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import { likePost, unlikePost } from '../../actions/like_actions';

// remember to user currentUser created from json views
const mapStateToProps = state => {
  // const posts = Object.values(state.entities.posts);
  const currentUser = state.entities.users[state.session.id];
  const users = state.entities.users;
  const posts = Object.keys(state.entities.posts).map(id => state.entities.posts[id]);
  // debugger
  return ({
    currentUser: currentUser,
    users: users,
    posts: posts, 
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  // fetchLikedPosts: (userId) => dispatch(fetchLikedPosts(userId)),
  // fetchOwnPosts: (userId) => dispatch(fetchOwnPosts(userId)),
  // updatePost: (post) => dispatch(updatePost(post)),
  // deletePost: (id) => dispatch(deletePost(id)),
  logout: () => dispatch(logout()),
  openModal: (formType) => dispatch(openModal(formType)), 
  //actions be in post_index or post_index_item??
  likePost: (postId, userId) => dispatch(likePost(postId, userId)),
  unlikePost: (postId) => dispatch(unlikePost(postId)),
});

export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);