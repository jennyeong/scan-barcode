Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/barcode", to: "pages#barcode"
  get "/barcode/show", to: "pages#show_barcode"
end
