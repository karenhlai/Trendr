class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :show, :update]

  #don't constrain index to specific user b/c all posts are public + new related ones can render into index
  def index
    @posts = Post.all
  end

  #must show current_user followings' posts in their index
  def user_posts
    @posts = Post.all.where(author_id: current_user.id)
  end
  
  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render "api/posts/show"
    else 
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.where(author_id: current_user.id).find(params[:id])
      
    if @post && @post.update(post_params)
      render "api/posts/show"
    else
      render json: ['Oops! Unable to edit post!'], status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post
      @post.destroy!
      render json: {}
      # render "api/posts"
    else
      render json: ["You cannot destroy this post!!"], status: 404
  end

  private
  def post_params
    params.require(:post).permit(:type, :title, :body, :author_id)
  end
end
