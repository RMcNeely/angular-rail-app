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
    Skill.build_tags(params)
    render json: s

  end

  def edit
    respond_with Skill.update(skill_params)
  end

  def destroy
    respond_with Skill.destroy(params[:id])
  end

  def skill_params
    params.require(:skill).permit(:name, :category, :description, :link, :documentation_link, :version)
  end
end
