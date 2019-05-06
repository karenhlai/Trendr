import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS, 
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST, 
  post
});

export const removePost = (postId) => ({
  type: REMOVE_POST, 
  postId
});

export const fetchPosts = () => (dispatch) => 
  PostAPIUtil.fetchPosts().then( posts => dispatch(receivePosts()));

export const fetchPost = () => (dispatch) => 
  PostAPIUtil.fetchPost(id).then( post => dispatch(receivePost(post)));

export const createPost = (post) => (dispatch) =>
  PostAPIUtil.createPost(post).then( post => dispatch(receivePost(post)));

export const updatePost = (post) => (dispatch) =>
  PostAPIUtil.updatePost(post).then( post => dispatch(receivePost(post)));

export const deletePost = (id) => (dispatch) => 
  PostAPIUtil.deletePost(id).then( post => dispatch(removePost(post.id)));