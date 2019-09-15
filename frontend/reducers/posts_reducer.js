import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST, RECEIVE_OWN_POSTS, RECEIVE_LIKED_POSTS } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

//set inital state to {} ???
const postsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  let likerId;
  let postId;

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
      nextState = merge({}, state, { [action.post.id]: action.post} );
      return nextState;
    case REMOVE_POST:
      delete nextState[action.postId];
      return nextState;
    case RECEIVE_LIKE:
      likerId = action.like.user_id;
      postId = action.like.post_id;
      nextState[postId].post_likes.push(likerId);
      return nextState;
    case REMOVE_LIKE:
      likerId = action.like.user_id;
      postId = action.like.post_id;
      let like = nextState[postId].post_likes.indexOf(likerId);
      delete nextState[postId].post_likes.splice(like);
      // debugger
      return nextState;
    default:
      return state;
  }
};

export default postsReducer;
