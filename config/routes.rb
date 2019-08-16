Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show] do
      resources :posts, only: [:index]
      resources :likes, only: [:index]
      resources :follows, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :posts, only: [:index, :show, :create, :update, :destroy] do 
      resource :like, only: [:destroy]
    end

    resources :likes, only: [:create]
    resources :follows, only: [:create, :destroy, :show]
  end

  root to: 'static_pages#root'
end
