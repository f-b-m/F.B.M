Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'users/sessions', registrations: 'users/registrations'}
  root to: 'menus#menu'

  get 'menus/index', to: 'menus#index'
  post 'menus/create', to: 'menus#create'
  delete 'menus/delete', to: 'menus#destroy'
  patch 'menus/update', to: 'menus#update'

end
