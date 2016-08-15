class Api::SkillsController < ApplicationController

  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    respond_with Skill.all
  end

  def show
    respond_with Skill.find(params[:id])
  end

  def create
    binding.pry
    s = Skill.create(skill_params)
    render json: s

  end

  def edit
    respond_with Skill.update(skill_params)
  end

  def destroy
    respond_with Skill.destroy(params[:id])
  end

  #
  #
  #
  # def show
  #   binding.pry
  #   skill = Skill.find_by_id(params[:id])
  #   render json: skill
  # end
  #
  # def index
  #   # binding.pry
  #   @skills = Skill.get_skope(params)
  #   render json: @skills, root: true
  # end
  #
  # def new
  #   # skill = Skill.new
  #   binding.pry
  #   @skills = Skill.get_skope(params)
  #   render json: @skills, root: true
  # end
  #
  # def create
  #   binding.pry
  #   Skill.create(skill_params)
  # end

  def skill_params
    params.require(:skill).permit(:name, :category, :description, :link, :documentation_link, :version)
  end
end
