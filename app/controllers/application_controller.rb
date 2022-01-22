class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    get '/movies' do
      movies = Movie.all
      movies.to_json
    end
  
    get "/actors" do
      actors = Actor.all
      actors.to_json
    end
  
    get "/genres" do
      genres = Genre.all
      genres.to_json
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