class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :text, :link, :name
  has_many :tags
  has_many :skills

end
