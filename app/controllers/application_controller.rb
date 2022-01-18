class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  
  get "/movies" do
    movie = Movie.all
    movie.to_json
  end

  get "/actors" do
    actor = Actor.all
    actor.to_json
  end

  get "/genres" do
    genre = Genre.all
    genre.to_json
  end

  get "/movies/:id" do 
    movie = Movie.find(params[:id])

    movie.to_json
  end

  get "/actors/:id" do 
    actor = Actor.find(params[:id])

    actor.to_json
  end

  post '/actors' do
    actor = Actor.create(
      name: params[:name],
      age: params[:age]
      
    )
    actor.to_json
    #add react fetch, method: POST, content-type: application/json and body: JSON.stringify( name: "Jim Carrey", age: 60) 
  end


  patch '/actors/:id' do 
    actor = Actor.find(params[:id])
    actor.update(
      name: params[:name], 
      age: params[:age]
    )
    actor.to_json
    
  end

  

end
