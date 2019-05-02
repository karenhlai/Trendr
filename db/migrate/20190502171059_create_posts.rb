class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string "type", null: false
      t.string "title"
      t.text "body" 
      t.integer "author_id", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
    add_index :posts, :author_id
  end
end

