class Movie < ActiveRecord::Base
     has_many :roles
     has_many :actors, through: :roles
     belongs_to :genre  
    
end 
