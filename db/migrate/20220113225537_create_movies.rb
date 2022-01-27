class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :movieName
      t.string :rating
      t.integer :release_date
      t.integer :genre_id
     
    end
  end
end
