class Tag < ActiveRecord::Base

  validates :skill_id, :resource_id, presence: true

  belongs_to :resource
  belongs_to :skill

end
