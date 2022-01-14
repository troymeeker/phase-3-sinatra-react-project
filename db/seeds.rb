puts "🌱 Seeding spices..."

#Movies
puts "creating Movies"
Movie.create(name:"Django Unchained", rating:"R" release_date: 2012, actor_id:Actor.first.id , genre_id:Genre.first.id)
Movie.create(name:"Stepbrothers", rating:"R" release_date: 2008, actor_id: Actor. , genre_id: Genre.)
Movie.create(name:"Uncut Gems", rating:"R" release_date: 2019, actor_id: Actor. , genre_id: Genre. )
Movie.create(name:"Happy Gilmore", rating:"PG-13" release_date: 1996, actor_id: Actor. , genre_id: Genre.)
Movie.create(name:"Anchorman", rating:"PG-13" release_date: 2004, actor_id: Actor. , genre_id:Genre.)

#Actors
puts "Creating Actors"
Actor.create(name:"Jamie Foxx", age: 54)
Actor.create(name:"Leonardo Dicaprio", age: 47)
Actor.create(name:"Will Ferrell", age: 54) 
Actor.create(name:"Adam Sandler", age: 55)
Actor.create(name:"Kathryn Hahn", age: 48)

#Genres
puts "Creating Genres"
Genre.create(type:"Thriller")
Genre.create(type:"Drama")
Genre.create(type:"Comedy")

puts "✅ Done seeding!"
