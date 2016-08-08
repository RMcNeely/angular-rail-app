class SkillSerializer < ActiveModel::Serializer
  binding.pry
  attributes :id, :name, :description, :link, :documentation_link
end
