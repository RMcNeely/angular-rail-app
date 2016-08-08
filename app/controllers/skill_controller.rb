class SkillController < ApplicationController
  def show
    binding.pry
    skill = Skill.find_by_id(params[:id])
    render json: skill
  end

  def index
    skills = Skill.all 
    render json: skills
  end

end
