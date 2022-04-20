class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :image
      t.string :category
      t.text :about
      t.string :event_name

      t.timestamps
    end
  end
end
