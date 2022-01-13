class Genre < ActiveRecord::Base
 #insert has_many/belongs_to associations here
 has_many :movies 
 has_many :actors, through: :movies
end 