class Resource < ActiveRecord::Base
  belongs_to :skill
  validates :link, :text, :name, presence: true
  validates :link, url: true
end
