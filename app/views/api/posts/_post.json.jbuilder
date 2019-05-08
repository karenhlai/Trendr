json.extract! post, :id, :content, :title, :body, :author_id

# media 
json.medias do 
  json.array! post.medias do |media|
    json.url url_for(media)
  end
end

