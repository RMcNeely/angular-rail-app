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
    # binding.pry
    r = Resource.create(resource_params)
    Resource.build_tags(params)
    render json: r
  end

  def edit
    respond_with Resource.update(resource_params)
  end

  def update
    binding.pry
    respond_with Resource.update(params[:id], resource_params)
  end

  def destroy
    respond_with Resource.destroy(params[:id])
  end

  def resource_params
    params.require(:resource).permit(:name, :link, :description, :favorite, tags:[])
  end
end
