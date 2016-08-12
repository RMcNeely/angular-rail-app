class Skill < ActiveRecord::Base
  validates :name, :category, :description, :link, presence: true
  validates :link, :documentation_link, url: true, if: :language_or_framework
  validates :category, inclusion: {in:['language', 'framework', 'technology', 'miscellaneous']}

  has_many :resources

  scope :language, -> { where(category: 'language') }
  scope :framework, -> { where(category: 'framework') }
  scope :technology, -> { where(category: 'technology') }
  scope :miscellaneous, -> { where(category: 'miscellaneous') }

  def language_or_framework
    self.category == 'language' || self.category == 'framework'
  end

  def self.get_skope(params)
    params[:skope] = params[:skope].slice(10..-3)
    # binding.pry
      if params[:skope] == 'language'
        @skills = Skill.language
      elsif params[:skope] == 'framework'
        @skills = Skill.framework
      elsif params[:skope]== 'technology'
        @skills = Skill.technology
      elsif params[:skope] == 'miscellaneous'
        @skills = Skill.miscellaneous
      else params[:skope] == nil
        @skills = Skill.all
    end
  end

end
