class Api::UsersController < ApplicationController
    def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      #render :show
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    
    if @user
      render :show
    else
      render @user.errors.full_messages, status: 404
    end
  end

  def index
    @users = User.includes(:followings, :followers).all
    render :index
  end
  
  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :avatar, :followings, :followers)
  end
end
