import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, fetchOwnPosts, fetchLikedPosts } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';

// remember to user currentUser created from json views
const mapStateToProps = state => {
  // debugger
  return ({
  currentUser: state.entities.users[state.session.id],
  posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id]), 
  users: state.entities.users,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  // fetchLikedPosts: (userId) => dispatch(fetchLikedPosts(userId)),
  // fetchOwnPosts: (userId) => dispatch(fetchOwnPosts(userId)),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: id => dispatch(deletePost(id)),
  logout: () => dispatch(logout()),
  openModal: (type) => dispatch(openModal(type))
});

export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);