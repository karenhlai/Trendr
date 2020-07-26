export const fetchPosts = () => {
  return $.ajax({
    method: 'get',
    url: 'api/posts'
  })
};

export const fetchPost = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/posts/${id}`
  })
};

// export const fetchOwnPosts = (id) => {
//   return $.ajax({
//     method: 'get', 
//     url: `api/users/${id}/posts`
//   })
// };

// export const fetchLikedPosts = (id) => {
//   return $.ajax({
//     method: 'get', 
//     url: `api/users/${id}/likes`
//   })
// }

export const createPost = (post) => {
  const request = {
    method: 'post',
    url: 'api/posts', 
    data: {post},
  }

  if (post.getAll) {
    request.data = post; //media only works when post is not wrapped in {}
    request.contentType = false;
    request.processData = false;
  }

  return $.ajax(request);
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
