Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :tracks
  end
  root to: 'static_pages#root'
end
