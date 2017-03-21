Rails.application.routes.draw do

  get 'ng/:sub', to: 'ng_page#loading', sub: /[\s\S]*/

  root to: 'ng_page#loading'

  apipie

  namespace :v1 do
    resources :users
    post 'users/login'
  end

end
