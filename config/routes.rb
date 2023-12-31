Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :stocks, only: [:index, :show]

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :stocks, only: [ :index, :show ]
    end
  end
end
