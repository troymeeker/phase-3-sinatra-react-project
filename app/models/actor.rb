class Actor < ActiveRecord::Base
    #insert has_many/belongs_to associations here
  belongs_to :movies
end 