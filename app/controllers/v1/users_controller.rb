class V1::UsersController < ApplicationController

  api!
  def index
  end

  api!
  def create
  end

  api!
  def destroy
  end

  api!
  def show
    @user = User.find(params[:id])
    render json: @user, serializer: UserSerializer
  end

  api!
  def login
    unless request.get?
      @username = params[:username]
      @password = params[:password]
      @user = User.authen_by_username(@username, @password)
      puts "username #{@username}" # '' no effect
      if @user.nil?
        render json: "not found user"
      else
        render json: @user
      end
    end
  end

end
