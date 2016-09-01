class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :description, :link, :name
  has_many :tags
  has_many :skills

end
