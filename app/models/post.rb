# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  content    :string
#  title      :string
#  body       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :user, 
  primary_key: :id,
  foreign_key: :author_id, 
  class_name: :User
  
  has_many_attached :medias

  # def body_too_long
  #   if body.length > 140 
  #     errors[:body] << "Post body is too long!"
  #   end
  # end
  
end
