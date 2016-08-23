class Skill < ActiveRecord::Base
  validates :name, :category, :description, :link, presence: true
  validates :category, inclusion: {in:['language', 'framework', 'technology', 'miscellaneous']}

  has_many :tags
  has_many :resources, through: :tags

  scope :language, -> { where(category: 'language') }
  scope :framework, -> { where(category: 'framework') }
  scope :technology, -> { where(category: 'technology') }
  scope :miscellaneous, -> { where(category: 'miscellaneous') }

  def self.build_tags(params)
    if params[:tags]
      params[:tags].each do |id|
        binding.pry
        self.last.tags.create(skill_id: id)
      end
    end
  end


end
