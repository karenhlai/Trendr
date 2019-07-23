#use for multiple controller actions
json.user do 
  json.partial! "api/users/user", user: @user
  json.avatarUrl url_for(user.avatar) if user.avatar.attached?
end


