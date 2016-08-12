class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :text, :link, :name
end
