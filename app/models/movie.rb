class Movie < ActiveRecord::Base
 #insert has_many/belongs_to associations here
    has_many :actors
end 