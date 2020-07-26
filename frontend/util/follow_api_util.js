export const fetchFollowings = (userId) => {
  return $.ajax({
    method: 'get', 
    url: `api/users/${userId}/follows`
  })
};

// pass in the userId that current_user wants to follow
export const follow = (followingId) => {
  return $.ajax({
    method: 'post', 
    url: `api/follows`, 
    data: { followingId }
  })
};

export const unfollow = (followingId) => {
  return $.ajax({
    method: 'delete', 
    url: `api/follows/${followingId}`
  })
};