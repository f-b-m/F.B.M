Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}
  root to: 'menus#menu'

  get 'menus/index', to: 'menus#index'
  post 'menus/create', to: 'menus#create'
  delete 'menus/delete', to: 'menus#destroy'
  patch 'menus/update', to: 'menus#update'

  get 'menu_detail/', to: 'menu_details#menu_detail'  

end
