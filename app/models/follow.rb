# == Schema Information
#
# Table name: follows
#
#  id           :bigint           not null, primary key
#  following_id :integer          not null
#  follower_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower_id, uniqueness: { scope: :following_id, message: "Uh oh, you cannot follow yourself!" }

  belongs_to :following, 
  primary_key: :id,
  foreign_key: :following_id, 
  class_name: :User

  belongs_to :follower, 
  primary_key: :id,
  foreign_key: :follower_id, 
  class_name: :User
end
