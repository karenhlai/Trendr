# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  post_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#

class Like < ApplicationRecord
    validates :user_id, :post_id, presence: true
    validates :post, uniqueness: {scope: :user}

    belongs_to :user
    belongs_to :post
end
