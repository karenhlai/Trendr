json.extract! @user, :id, :username

#user assc to get each user's post
json.posts do
  json.array! @user.posts.collect{ |post| post.id }
end


#likes 

#followers

#reblogs?