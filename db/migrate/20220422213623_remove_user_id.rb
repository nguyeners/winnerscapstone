class RemoveUserId < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :userid
  end
end
