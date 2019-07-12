import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
// export const RECEIVE_OWN_POSTS = 'RECEIVE_OWN_POSTS';
// export const RECEIVE_LIKED_POSTS = 'RECEIVE_LIKED_POSTS';

export const receivePosts = ({ posts, currentUser, users }) => ({
  type: RECEIVE_POSTS, 
  posts, 
  currentUser, 
  users
});

export const receivePost = (post) => ({
  type: RECEIVE_POST, 
  post
});

export const removePost = (postId) => ({
  type: REMOVE_POST, 
  postId
});

// export const receiveOwnPosts = (payload) => ({
//   type: RECEIVE_OWN_POSTS,
//   payload
// });

// export const receiveLikedPosts = (payload) => ({
//   type: RECEIVE_LIKED_POSTS,
//   payload
// });



//thunks
export const fetchPosts = () => (dispatch) => 
  PostAPIUtil.fetchPosts().then( payload => dispatch(receivePosts(payload)));

// export const fetchPost = () => (dispatch) => 
//   PostAPIUtil.fetchPost(id).then( post => dispatch(receivePost(post)));

export const createPost = (post) => (dispatch) =>
  PostAPIUtil.createPost(post).then( post => dispatch(receivePost(post)));

export const updatePost = (post) => (dispatch) =>
  PostAPIUtil.updatePost(post).then( post => dispatch(receivePost(post)));

export const deletePost = (id) => (dispatch) => 
  PostAPIUtil.deletePost(id).then( post => dispatch(removePost(post.id)));

// export const fetchOwnPosts = (userId) => dispatch => 
//   PostAPIUtil.fetchOwnPosts(userId).then(posts => dispatch(receiveOwnPosts(posts)));

// export const fetchLikedPosts = (userId) => dispatch => 
//   PostAPIUtil.fetchLikedPosts(userId).then(posts => dispatch(receiveLikedPosts(posts)));
