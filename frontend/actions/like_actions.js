import * as LikeApiUtil from '../util/like_api_util';
import { fetchPost } from '../util/post_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE, 
  like
});

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
});

//add likes count, 
//refactor to show liked by user
export const likePost = (postId, userId) => (dispatch) => 
  LikeApiUtil.likePost(postId, userId).then(like => dispatch(receiveLike(like)));

export const unlikePost = (postId) => (dispatch) => 
  LikeApiUtil.unlikePost(postId).then((like) => dispatch(removeLike(like)));


