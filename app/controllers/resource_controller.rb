class ResourceController < ApplicationController
  def show
    binding.pry
    resource = Resource.find_by_id(params[:id])
    render json: resource
  end
end
