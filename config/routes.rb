Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :skills, :resources, :tags
    devise_for :users
  end


  root 'application#home'
end
