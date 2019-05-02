class Api::PostsController < ApplicationController
  # :index, :show, :create, :update, :destroy
  def index
  end

  def show
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render "api/posts"
      # need to render the index page (not show!), with my created post on the top/first of index dashboard
    else 
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
      
    if @post
      
    end
  end

  def destroy
  end

  private
  def post_params
    params.require(:post).permit(:type, :title, :body)
  end
end
