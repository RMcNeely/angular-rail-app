Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :skills, :resources, :tags, only: [:index, :new, :create, :edit]
    devise_for :users
  end


  root 'application#home'
end
