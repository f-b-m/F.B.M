class MenusController < ApplicationController
  def menu
  end

  def index
    @menus = Menu.all
    render json: @menus.to_json
  end

  def create
    menu = Menu.new(params.permit(:title, :content, :user_id))
    menu.user_id = current_user.id
    menu.save
    render :body => nil, :status => 200
  end

  def destroy
    menu = Menu.find(params[:id])
    menu.destroy
    render :body => nil, :status => 200
  end

  def update
    menu = Menu.find(params[:id])
    menu.update
    render :body => nil, :status => 200
  end


end
