class Genre < ActiveRecord::Base
    has_many :movies 
    has_many :roles
    has_many :actors, through: :roles
end 