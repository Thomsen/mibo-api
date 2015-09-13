class V1::UsersController < V1::BaseController

  def_param_group :user do
    param :user, Hash, :required => true, :action_aware => true do
      param :username, String, "name of the user", :required => true
      param :email, String, "email of the user", :required => true
      param :gender, String, "gender of the user", :requried => true
      param :form_password, String, "password of the user", :required => true
      param :remark, String, "remark of the user", :required => false
      param :description, String, "description of the user", :requried => false
    end
  end

  api! 'show all user profile'
  def index
    @users = User.all
    render json: @users
  end

  api :GET, 'v1/users/:id', "show user profile"
  param :params, Hash do
    param :id, :number, 'user id', :required => true
  end
  def show
    @user = User.find(params[:id])
    render json: @user, serializer: UserSerializer
  end

  api! 'create user'
  param_group :user
  def create
    @user = User.new(user_params)

    if (@user.save)
      render json: @user, status: :created#, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  api! 'delete user'
  param :params, Hash do
    param :id, :number, 'user id', :required => true
  end
  def destroy
    @user = User.find(params[:id])
    @user.destory

    head :no_content
  end

  api :POST, 'v1/users/login', 'user login'
  param :params, Hash do
    param :username, String, 'user name', :required => true
    param :password, String, 'user password', :required => true
  end
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

  private

  def user_params
    params.require(:user).permit(:username, :form_password, :email, :gender, :remark, :description)
  end

end
