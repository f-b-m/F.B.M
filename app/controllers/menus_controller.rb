class MenusController < ApplicationController
  before_action :authenticate_user!, only: [:destroy, :create, :update]

  def menu
  end

  def index
    @menus = Menu.all
    render json: @menus.to_json
  end

  def create
    menu = Menu.new(params.permit(:title, :content))
    menu.user_id = current_user.id
    menu.save
    render :body => nil, :status => 200
  end

  def destroy
    p '-----------id----------------'
    p params[:id]
    menu = Menu.find(params[:id])
    menu.destroy
    render :body => nil, :status => 200
  end

  def update
    title = params[:title]
    content = params[:content]
    menu = Menu.find(params[:id])
    menu.update(title: title, content: content)
    render :body => nil, :status => 200
  end


end
