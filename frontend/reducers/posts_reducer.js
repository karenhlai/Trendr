import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_OWN_POSTS, RECEIVE_LIKED_POSTS } from '../actions/post_actions';
import merge from 'lodash/merge';

//set inital state to {} ???
const postsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_OWN_POSTS:
      return action.payload.posts;
    case RECEIVE_LIKED_POSTS:
      return action.payload.posts;
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      // nextState[action.post.id] = action.post;
      let newState = merge({}, state, { [action.post.id]: action.post})
      return newState;
    case REMOVE_POST:
      delete nextState[action.postId];
      return nextState;
    default:
      return state;
  }
};

export default postsReducer;
