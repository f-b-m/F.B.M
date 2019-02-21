Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'menus#menu'

  get 'menus/index', to: 'menus#index'
  post 'menus/create', to: 'menus#create'
  delete 'menus/delete', to: 'menus#destroy'
  patch 'menus/update', to: 'menus#update'

end
