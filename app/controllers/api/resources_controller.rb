class Api::ResourcesController < ApplicationController

  def index
    # binding.pry
    resources = Resource.all
    render json: resources
  end

  def new

  end

end


#  https://zoom.us/j/331554631
