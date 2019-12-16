import { connect } from 'react-redux';
import { unfollow } from '../../actions/follow_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import FollowingIndex from './following_index';
// import { selectUserFollowings } from '../../selectors/users_selectors';

const mapStateToProps = state => {
  const currentUser =  state.entities.users[state.session.id];
  const users = Object.values(state.entities.users);
  return ({
    currentUser,
    users, 
  });
};

const mapDispatchToProps = dispatch => {
  // debugger
  return ({
  unfollow: (userId) => dispatch(unfollow(userId)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  // fetchFollowings: (userId) => dispatch(fetchFollowings(userId))
});
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingIndex);
