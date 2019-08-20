import { connect } from 'react-redux';
import { unfollow } from '../../actions/follow_actions';
import FollowingIndex from './following_index';

const mapStateToProps = state => {
  const currentUser =  state.entities.users[state.session.id];
  return ({
    currentUser,
  });
};

const mapDispatchToProps = dispatch => ({
  unfollow: (userId) => dispatch(unfollow(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);
