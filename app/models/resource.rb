class Resource < ActiveRecord::Base
  belongs_to :framework, :language, :techology
  validates :link, :text, presence: true
end
