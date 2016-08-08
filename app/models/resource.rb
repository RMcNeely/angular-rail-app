class Resource < ActiveRecord::Base
  belongs_to :skill
  validates :link, :text, :skill_id, presence: true
  validates :link, url: true
end
