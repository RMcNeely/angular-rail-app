class TagsSerializer < ActiveModel::Serializer
  attributes :id, :skill_id, :resource_id

  has_one :resource
  has_one :skill
end
