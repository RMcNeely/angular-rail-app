class Resource < ActiveRecord::Base
  belongs_to :skill
  validates :link, :text, :name, presence: true
  validates :link, url: true

  def self.get_resources(params)
    ps = params[:skope].split(',')
    if ps.empty?
      resources = Skill.all
    else
      skill = ps[0].slice(10..-2)
      id = ps[1].slice(9..-3).to_i
      resources = Skill.find_by_id(id).resources
    end

  end

end
