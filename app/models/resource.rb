class Resource < ActiveRecord::Base
  has_many :tags
  has_many :skills, through: :tags
  validates :link, :text, :name, presence: true
  validates :link, url: true

  def self.build_tags(params)
    params[:tags].each do |id|
      binding.pry
      self.last.tags.create(skill_id: id)
    end
  end

end
