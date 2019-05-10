# partial for users
json.extract! user, :id, :username, :email
json.avatarUrl url_for(user.avatar) if user.avatar.attached?
# <img src="<%= url_for(user.avatar) if user.avatar.attached?"" %> alt="" />

#array of postId's for user's posts
json.posts do
  json.array! user.posts.collect{ |post| post.id }
end
