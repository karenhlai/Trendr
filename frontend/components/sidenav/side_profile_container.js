import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import SideProfile from './side_profile';

const mapStateToProps = (state, ownProps) => {
  // const posts = Object.keys(state.entities.posts).map(id => state.entities.posts[id]);
  const targetUser = ownProps.targetUser;
  return ({
    // posts,
    targetUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(SideProfile);

