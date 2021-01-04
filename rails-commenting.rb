# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) Blog post controller is a class inheriting from application controller
class BlogPostsController < ApplicationController
  def index
    # 2) Creating an instance variable to hold all the blog posts in the database
    @posts = BlogPost.all
  end

  def show
    # 3) Creating an instance variable for one blog post by id
    @post = BlogPost.find(params[:id])
  end

  # 4) Method that will take us to the form to create an new instance
  def new
    @post = Post.new
  end

  def create
    # 5) Create a new post with certain content as defined by the params method
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) Ensuring the updates content is following the rules of the params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) Redirect back to the blog post if it in not deleted successfully
      redirect_to blog_post_path(@post)
    end
  end

  # 8) prohibits anything below this line from being called outside of this class
  private
  def blog_post_params
    # 9) Require method takes in the model name and permit sets which columns can be updated
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) Defines a relationship between blog post and comments
  has_many :comments
end
