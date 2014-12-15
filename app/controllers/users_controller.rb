class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: @user, serializer: UserSerializer
  end

  def login
    puts 'login'
  end

end
