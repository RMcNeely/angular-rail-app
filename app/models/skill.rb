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

end
