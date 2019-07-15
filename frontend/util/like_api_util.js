export const likePost = (postId, userId) => {
  return $.ajax({
    method: 'post',
    url: '/api/likes',
    data: { postId, userId },
  })
}

export const unlikePost = (postId) => {
  return $.ajax({
    method: 'delete',
    url: `api/posts/${postId}/like`
  })
}