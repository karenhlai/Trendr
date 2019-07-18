json.extract! post, :id, :content, :title, :body, :author_id

# media 
json.medias do 
  json.array! post.medias do |media|
    json.mediaUrl url_for(media) if post.medias.attached?
  end
end

json.set! :likers do
    json.array! post.likes.pluck(:user_id)
end
