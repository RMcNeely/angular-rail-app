class Technology < Skill
  has_many  :resources
  validates:  :homepage, :documentation, :link, presence: true
end
