class MovieActor < ActiveRecord::Base
    belongs_to :movie
    belongs_to :actor
    belongs_to :genre

end