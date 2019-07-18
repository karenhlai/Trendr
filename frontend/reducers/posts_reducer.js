import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_OWN_POSTS, RECEIVE_LIKED_POSTS } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

//set inital state to {} ???
const postsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    // case RECEIVE_OWN_POSTS:
    //   return action.payload.posts;
    // case RECEIVE_LIKED_POSTS:
    //   return action.payload.posts;
    case RECEIVE_POSTS:
      nextState = merge({}, state, action.posts );
      return nextState;
    case RECEIVE_POST:
      // nextState[action.post.id] = action.post;
      nextState = merge({}, state, { [action.post.id]: action.post})
      return nextState;
    case REMOVE_POST:
      delete nextState[action.postId];
      return nextState;
    case RECEIVE_LIKE:
      nextState[action.like.postId].likes.push(action.like.userId);
      return nextState;
    // case REMOVE_LIKE:
    //   const idx = nextState[action.like.postId].likers.indexOf(action.like.userId);
    //   nextState[action.like.postId].likers.splice(idx);
    //   return nextState;
    default:
      return state;
  }
};

export default postsReducer;
