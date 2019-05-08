class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create, :show, :update]

  # show user's liked posts, own posts, following user's posts (and later reblogged posts)
  def index
    @posts = Post.all
    render :index
  end

  #must show current_user followings' posts in their index
  # def user_posts
  #   @posts = Post.all.where(author_id: current_user.id)
  # end
  
  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render :show
    else 
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = current_user.posts.find(params[:id])
    # @post = Post.where(author_id: current_user.id).find(params[:id])
      
    if @post && @post.update_attributes(post_params)
      render :show
    else
      render json: ['Oops! Unable to edit post!'], status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    # @post = Post.where(author_id: current_user.id).find(params[:id])

    if @post
      @post.destroy!
      render json: {}
      # render "api/posts"
    else
      render json: ["You cannot destroy this post!!"], status: 404
    end
  end

  private
  def post_params
    params.require(:post).permit(:content, :title, :body, :author_id)
  end
end
