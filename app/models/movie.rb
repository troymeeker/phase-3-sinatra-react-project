class Movie < ActiveRecord::Base
 #insert has_many/belongs_to associations here
    belongs_to :actor
    belongs_to :genre
end 