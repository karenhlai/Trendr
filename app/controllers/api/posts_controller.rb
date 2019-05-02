class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    @posts.select do |post|
      post.authod_id == current_user.id
    end
    render "api/posts"
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
      
    if @post.update(post_params)
      render "api/posts"
      #must stay in same position on db, will show db index with updated post in order of when it was created
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroys
      render "api/posts"
      # once destroyed user will see updated index(without the destroyed post)
    else
      render json: ["You cannot destory this/what's not there"], status: 404
  end

  private
  def post_params
    params.require(:post).permit(:type, :title, :body)
  end
end
