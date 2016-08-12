class ResourceController < ApplicationController
  def show
    binding.pry
    resource = Resource.find_by_id(params[:id])
    render json: resource
  end

  def index
    resources = Resource.all
    render json: resources
  end

  def new

  end

end


#  https://zoom.us/j/331554631
