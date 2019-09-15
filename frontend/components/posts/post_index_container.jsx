import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import PostIndex from './post_index';

// remember to user currentUser created from json views
const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id];
  const username = currentUser.username;
  const users = state.entities.users;
  const posts = Object.keys(state.entities.posts).map(id => state.entities.posts[id]);
  // const posts = Object.values(state.entities.posts);
  // debugger
  return ({
    currentUser, 
    users, 
    posts
  });
};

const mapDispatchToProps = dispatch => {
  // debugger
  return ({
  fetchPosts: () => dispatch(fetchPosts()),
  openModal: (formType) => dispatch(openModal(formType)), //createPost from postNav
});
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);