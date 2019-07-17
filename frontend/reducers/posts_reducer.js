import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_OWN_POSTS, RECEIVE_LIKED_POSTS } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

//set inital state to {} ???
const postsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_OWN_POSTS:
      return action.payload.posts;
    case RECEIVE_LIKED_POSTS:
      return action.payload.posts;
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      // nextState[action.post.id] = action.post;
      nextState = merge({}, state, { [action.post.id]: action.post})
      return nextState;
    case REMOVE_POST:
      delete nextState[action.postId];
      return nextState;
    case RECEIVE_LIKE:
      nextState = merge({}, state, { [action.like.postId]: action.like.userId });
      return nextState;
    // case REMOVE_LIKE:
    //   delete nextState[action.like.postId];
    //   return nextState;
    default:
      return state;
  }
};

export default postsReducer;
