# json.extract! follow, :following_id, :follower_id

# follows is avai. from user's association

# get user's id's for followings and followers
json.set! :followings do
  json.array! @user.followings.pluck(:id)
end

json.set! :followers do
  json.array! @user.followers.pluck(:id)
end