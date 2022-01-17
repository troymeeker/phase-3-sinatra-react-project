class CreateActors < ActiveRecord::Migration[6.1]
  def change
    create_table :actors do |t|
      t.string :name
      t.integer :age
      t.integer :movie_id
      
     
    end
  end
end
