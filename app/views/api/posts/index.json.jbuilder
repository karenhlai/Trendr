@posts.each do |post|
   json.set! post.id do
      json.extract! post, :id, :title, :body, :author_id
      json.likes post.likes.map { |like| { id: like.id, author_id: like.author_id } }
      json.media url_for(post.media) if post.media.attached?
   end
end