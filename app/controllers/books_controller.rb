class BooksController < ApplicationController
  def app
    render component: 'App' 
  end

  def index
    books = Book.all
    
    # render Component 'Books', props:{books:books}
    render json: books
  end

  # def create
  #   item = Item.new(items_params)
  #   if(item.save)
  #     render json: item
  #   else
  #     # this will cause a 422 error
  #     render json: {errors: item.errors, look:'Hello'}, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   @item = Item.find(params[:id])
  #   render json: @item.destroy
  # end

  # private

  # def items_params
  #   params.require(:item).permit(:name, :description)
  # end
end
