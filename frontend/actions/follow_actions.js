import * as FollowAPIUtil from '../util/follow_api_util';

export const RECEIVE_USER_FOLLOWS = 'RECEIVE_USER_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

// const receiveUserFollows = (userId, follows) => {
//   return {
//     type: RECEIVE_USER_FOLLOWS, 
//     userId, 
//     follows
//   }
// }; 

export const receiveFollow = (follow) => {
  return {
    type: RECEIVE_FOLLOW, 
    follow
  }
};

export const removeFollow = (follow) => {
  return {
    type: REMOVE_FOLLOW, 
    follow
  }
};

export const follow = (followingId) => dispatch => 
  FollowAPIUtil.follow(followingId).then((follow) => dispatch(receiveFollow(follow)));

export const unfollow = (followingId) => dispatch =>
  FollowAPIUtil.unfollow(followingId).then((follow) => dispatch(removeFollow(follow)));