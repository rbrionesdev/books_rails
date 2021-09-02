class BooksController < ApplicationController
  def app
    render component: 'App' 
  end

  def index
    books = Book.all
    
    # render Component 'Books', props:{books:books}
    render json: books
  end

  def create
    book = Book.new(books_params)
    if(book.save)
      render json: book
    else
      # this will cause a 422 error
      render json: {errors: book.errors, look:'Hello'}, status: :unprocessable_entity
    end
  end

  def destroy
    @book = Book.find(params[:id])
    render json: @book.destroy
  end

  private

  def books_params
    params.require(:book).permit(:title, :author)
  end
end
