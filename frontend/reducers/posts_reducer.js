import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

//set inital state to {} ???
const postsReducer = (state, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      nextState[action.post.id] = action.event;
      return nextState;
    case REMOVE_POST:
      delete nextState[action.postId];
      return nextState;
    default:
      return state;
  }
};

export default postsReducer;
