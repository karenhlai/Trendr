# partial for users
json.extract! user, :id, :username, :email
json.avatarUrl url_for(user.avatar) if user.avatar.attached?
# <img src="<%= url_for(user.avatar) if user.avatar.attached?"" %> alt="" />

#array of postId's for user's posts
json.posts do
  json.array! user.posts.collect{ |post| post.id }
end

#set - array of users that current_user is following 
json.set! :followings do
  json.array! user.followings.pluck(:id)
end

#set - array of users that follows current_user
json.set! :followers do
    json.array! user.followers.pluck(:id)
end