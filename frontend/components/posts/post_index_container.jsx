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
  logout: () => dispatch(logout()),
  openModal: (formType) => dispatch(openModal(formType)), //createPost from postNav
});

export default connect(mapStateToProps,mapDispatchToProps)(PostIndex);