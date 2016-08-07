class Skill < ActiveRecord::Base
  validates :name, :type, :description, :homepage_link, :documentation_link, presence: true
  https://github.com/perfectline/validates_url
end
