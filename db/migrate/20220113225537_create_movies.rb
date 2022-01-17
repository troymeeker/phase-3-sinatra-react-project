class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :rating
      t.integer :release_date
      t.integer :actor_id
      t.integer :genre_id
      
    end
  end
end
