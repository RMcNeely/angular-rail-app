class Api::TagsController < ApplicationController

  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    respond_with Tag.all
  end

  def show
    respond_with Tag.find(params[:id])
  end

  def create
    binding.pry
    t = Tag.create(skill_params)
    render json: t

  end

  def edit
    respond_with Tag.update(skill_params)
  end

  def destroy
    respond_with Tag.destroy(params[:id])
  end

  def skill_params
    params.require(:tag).permit(:skill_id, :resource_id)
  end
end
