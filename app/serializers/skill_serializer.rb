class SkillSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :link, :documentation_link
  # binding.pry
  #
  # def attributes
  #   data = super
  #   binding.pry
  #   data
  # end

end
