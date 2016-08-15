class Api::ResourcesController < ApplicationController

  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    respond_with Resource.all
  end

  def show
    respond_with Resource.find(params[:id])
  end

  def create
    binding.pry
    r = Resource.create(skill_params)
    render json: r
  end

  def edit
    respond_with Resource.update(skill_params)
  end

  def destroy
    respond_with Resource.destroy(params[:id])
  end

  def resource_params
    params.require(:resource).permit(:name, :skill_id, :link, :text)
  end
end
