export const fetchPosts = () => {
  return $.ajax({
    method: 'get',
    url: 'api/posts'
  })
};

// remove if not using for modal
// export const fetchPost = (id) => {
//   return $.ajax({
//     method: 'get',
//     url: `api/posts/${id}`
//   })
// };

export const fetchOwnPosts = (id) => {
  return $.ajax({
    method: 'get', 
    url: `api/users/${id}/posts`
  })
}

export const fetchLikedPosts = (id) => {
  return $.ajax({
    method: 'get', 
    url: `api/users/${id}/likes`
  })
}

export const createPost = (post) => {
  return $.ajax({
    method: 'post',
    url: 'api/posts', 
    data: { post }
  })
};

export const updatePost = (post) => {
  return $.ajax({
    method: 'patch',
    url: `api/posts/${post.id}`,
    data: { post }
  })
};

export const deletePost = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/posts/${id}`
  })
};
