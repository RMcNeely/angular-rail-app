class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :description, :link, :name, :favorite
  has_many :tags
  has_many :skills

end
