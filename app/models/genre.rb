class Genre < ActiveRecord::Base
 #insert has_many/belongs_to associations here
 has_many :movies 
 has_many :movie_actors 
 has_many :actors, through: :movie_actors
end 