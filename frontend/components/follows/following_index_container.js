import { connect } from 'react-redux';
import { unfollow } from '../../actions/follow_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import FollowingIndex from './following_index';

const mapStateToProps = state => {
  const currentUser =  state.entities.users[state.session.id];
  // debugger
  return ({
    currentUser,
  });
};

const mapDispatchToProps = dispatch => ({
  unfollow: (userId) => dispatch(unfollow(userId)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);
