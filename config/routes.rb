Rails.application.routes.draw do
  root "books#app"
  
  resources :books
  
  # # get '/books', to: 'books#index'
  # # get '/items/new', to:'items#new' # we don't need this
  # # post '/books', to:'books#create'
    # resources :items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root 'books#app'

  # get '/books', to: 'books#index'
  # # get '/books/new', to:'books#new' # we don't need this
  # post '/books', to:'books#create'

  # put '/books/:id', to:'books#update'
  # patch '/books/:id', to:'books#update'

  # put 'books/:id/like', to: 'books#like'

  # delete '/books/:id', to:'books#destroy'
end
