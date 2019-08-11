import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import SideProfile from './side_profile';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  // const posts = Object.keys(state.entities.posts).map(id => state.entities.posts[id]);
  const targetUser = ownProps.targetUser;
  return ({
    currentUser, 
    // posts,
    targetUser
  });
};

const mapDispatchToProps = dispatch => ({
  // fetchPosts: () => dispatch(fetchPosts()), //fetchOwnPosts - match currentUsername, 
});

export default connect(mapStateToProps, mapDispatchToProps)(SideProfile);

