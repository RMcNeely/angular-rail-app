class Api::SkillsController < ApplicationController

  skip_before_filter :verify_authenticity_token
  respond_to :json

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
    skill = Skill.create(name: params[:name], description: params[:description], link: params[:link], documentation_link: params[:documentationLink], version: params[:version], category: params[:skope].slice(0..-5))
    binding.pry
    @skills = Skill.get_skope(params)
    render json: @skills, root: true
  end

  def skill_params
    params.require(:skill).permit(:name, :description, :link, :documentationLink, :version, :skope )
  end
end
