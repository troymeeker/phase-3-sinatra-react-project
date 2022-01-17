class Actor < ActiveRecord::Base
    #insert has_many/belongs_to associations here
    has_many :movie_actors 
    has_many :movies, through: :movie_actors

    has_many :genres, through: :movie_actors
    
   
   

end 