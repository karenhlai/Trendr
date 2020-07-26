json.extract! post, :id, :content, :title, :body, :author_id

# media 
json.medias do 
  json.array! post.medias do |media|
    json.mediaUrl url_for(media) if post.medias.attached?
  end
end

# author of post
json.user do
    json.partial! "api/users/user", user: post.user
end

json.set! :post_likes do
  # json.partial! "api/likes/like", like: post.likes
    json.array! post.likes.pluck(:user_id)
end