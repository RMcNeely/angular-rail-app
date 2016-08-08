class Skill < ActiveRecord::Base
  validates :name, :category, :description, :link, presence: true
  validates :link, :documentation_link, url: true, if: :language_or_framework
  validates :category, inclusion: {in:['language', 'framework', 'technology', 'miscellaneous']}
#  validate :langauges_and_frameworks_require_documentation

  scope :language, -> { where(type: 'language') }
  scope :framework, -> { where(type: 'framework') }
  scope :technology, -> { where(type: 'technology') }
  scope :miscellaneous, -> { where(type: 'miscellaneous') }

  def language_or_framework
    self.category = 'language' || 'framework'
  end

  #https://github.com/perfectline/validates_url
end
