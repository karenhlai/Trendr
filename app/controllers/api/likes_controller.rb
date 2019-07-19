class Api::LikesController < ApplicationController
  before_action :require_logged_in, only: [:create, :show, :update]

    def index
        @likes = current_user.likes
        render :index
    end

    def create
      #debugger
      @like = Like.new()
      @like.post_id = params[:postId]
      @like.user_id = current_user.id

      if @like.save
        render json: @like
      else
        render json: @like.errors.full_messages, status: 422
      end
    end

    def destroy
      @like = current_user.likes.find_by(
        post_id: params[:post_id], 
        user_id: current_user.id
        )
      
      if @like && @like.destroy!
        render json: @like
      else
        render json: @like.errors.full_messages, status: 422
      end
    end

    private
    def like_params
      params.require(:like).permit(:post_id, :user_id)
    end
end