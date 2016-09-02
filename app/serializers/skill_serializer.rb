class SkillSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :link, :documentation_link, :category, :favorite

  has_many :resources

end
