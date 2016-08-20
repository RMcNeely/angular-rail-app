class Resource < ActiveRecord::Base
  has_many :tags
  has_many :skills, through: :tags
  validates :link, :text, :name, presence: true
  validates :link, url: true
  

end
