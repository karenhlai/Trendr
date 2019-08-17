#json.partial! 'post', post: @post 

json.post do
    json.partial! "api/posts/post", post: @post
    json.mediaUrl url_for(media) if post.medias.attached?
end

