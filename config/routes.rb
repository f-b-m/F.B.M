Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
  root to: 'menus#menu'

  get 'drills/index', to: 'menus#index'
  post 'drills/create', to: 'menus#create'
  delete 'drills/delete', to: 'menus#destroy'
  patch 'drills/update', to: 'menus#update'

end
