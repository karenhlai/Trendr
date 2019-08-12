@users.each do |user|
    json.set! user.id do
        json.partial! "api/users/user", user: user
        json.photoUrl url_for(user.avatar) if user.avatar.attached?
    end
end