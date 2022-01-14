class Actor < ActiveRecord::Base
    #insert has_many/belongs_to associations here
    has_many :movies
    has_many :genres, through: :movies
end 