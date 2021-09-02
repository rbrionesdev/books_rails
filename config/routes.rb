Rails.application.routes.draw do
  root "books#app"
  
  resources :books
  
  # get '/books', to: 'books#index'
  # get '/items/new', to:'items#new' # we don't need this
  post '/books', to:'books#create'
end
