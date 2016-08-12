class SkillController < ApplicationController
  def show
    binding.pry
    skill = Skill.find_by_id(params[:id])
    render json: skill
  end

  def index
    # binding.pry
    @skills = Skill.get_skope(params)
    render json: @skills, root: true
  end

  def new
    binding.pry
  end
end
