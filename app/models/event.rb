class Event < ApplicationRecord
  belongs_to :user
  validates :event_name, :about, :category, :image, presence: true
end
