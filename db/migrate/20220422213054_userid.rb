class Userid < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :userid, :integer
  end
end
