Rails.application.routes.draw do

  apipie

  namespace :v1 do
    resources :users
    post 'users/login'
  end

end
