Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :skills do
      resources :resources, only: [:index, :new, :create, :edit]
    end
    resources :resources
    devise_for :users
  end


  root 'application#home'
end
