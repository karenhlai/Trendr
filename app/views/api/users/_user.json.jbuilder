# partial for users
json.extract! user, :id, :username, :email
# json.avatar url_for(user.avatar) if user.avatar

#array of postId's for user's posts
json.posts do
  json.array! user.posts.collect{ |post| post.id }
end
