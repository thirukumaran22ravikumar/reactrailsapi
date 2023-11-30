Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      
      post 'createUser', to: 'user#createUser'
      get 'getUser',  to: 'user#show'
      delete 'deleteUser/:id', to: 'user#delete'
      put 'update/:id', to: 'user#update'
      post 'createProduct',  to: 'user#createProduct'
      # get 'uploads', to: 'user#show_image'
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
