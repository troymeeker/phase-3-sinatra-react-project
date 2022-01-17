class Movie < ActiveRecord::Base
     has_many :actors
     belongs_to :genre
     belongs_to :actor

    
end 