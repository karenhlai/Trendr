import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, fetchOwnPosts, fetchLikedPosts, updatePost, deletePost } from '../../actions/post_actions';

// remember to user currentUser created from json views
const mapStateToProps = state => {
  debugger
  return ({
  currentUser: state.entities.users[state.session.id],
  posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id]), 
  users: state.entities.users,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  fetchLikedPosts: (userId) => dispatch(fetchLikedPosts(userId)),
  fetchOwnPosts: (userId) => dispatch(fetchOwnPosts(userId)),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);