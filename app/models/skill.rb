class Skill < ActiveRecord::Base
  validates :name, :category, :description, :link, presence: true
  validates :category, inclusion: {in:['language', 'framework', 'technology', 'miscellaneous']}

  has_many :resources

  scope :language, -> { where(category: 'language') }
  scope :framework, -> { where(category: 'framework') }
  scope :technology, -> { where(category: 'technology') }
  scope :miscellaneous, -> { where(category: 'miscellaneous') }


  # def self.get_skope(params)
  #
  #   # binding.pry
  #     if params[:skope] == 'language'
  #       @skills = Skill.language
  #     elsif params[:skope] == 'framework'
  #       @skills = Skill.framework
  #     elsif params[:skope]== 'technology'
  #       @skills = Skill.technology
  #     elsif params[:skope] == 'miscellaneous'
  #       @skills = Skill.miscellaneous
  #     else params[:skope] == nil
  #       @skills = Skill.all
  #   end
  # end

end
