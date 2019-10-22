# use for multiple controller actions
json.user do 
  json.partial! "api/users/user", user: @user
  json.avatarUrl url_for(@user.avatar) if @user.avatar.attached?
end

# get
json.followings do
  json.array! @user.followings do |follow|
    json.id follow.id
    json.username follow.username
  end
end

# get
json.followers do
  json.array! @user.followers do |follow|
    json.id follow.id
    json.username follow.username
  end
end