class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    get '/movies' do
      movies = Movie.all
      movies.to_json(include: [:genre])
    end
  
    get "/actors" do
      actors = Actor.all
      actors.to_json
    end
  
    get "/genres" do
      genres = Genre.all
      genres.to_json
    end
  
    # get "/movies/:id" do 
    #   movie = Movie.find(params[:id])
  
    #   movie.to_json
    # end
  
    # get "/actors/:id" do 
    #   actor = Actor.find(params[:id])
  
    #   actor.to_json
    # end

    delete '/actors/:id' do 
      actor = Actor.find(params[:id])
      actor.destroy
      actor.to_json

    end

    delete '/movies/:id' do 
      movie = Movie.find(params[:id])
      movie.destroy
      movie.to_json

    end

    # delete '/genres/:id' do 
    #   genre = Genre.find(params[:id])
    #   genre.destroy
    #   genre.to_json

    # end
  
    post '/actors' do
      actor = Actor.create(
        name: params[:name],
        age: params[:age]
        
      )
      actor.to_json
    end

    post '/movies' do
      movie = Movie.create(
        movieName: params[:movieName],
        rating: params[:rating], 
        release_date: params[:release_date],
        genre_id: params[:genre_id]
      )
      movie.to_json(include: [:genre])
    end
  
  
    # patch '/actors/:id' do 
    #   actor = Actor.find(params[:id])
    #   actor.update(
    #     name: params[:name], 
    #     age: params[:age]
    #   )
    #   actor.to_json
    # end
end