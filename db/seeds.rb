puts "🌱 Seeding ..."

#Actors
puts "Creating Actors"
Actor.create(name:"Jamie Foxx", age: 54)
Actor.create(name:"Will Ferrell", age: 54) 
Actor.create(name:"Adam Sandler", age: 55)
Actor.create(name:"Kathryn Hahn", age: 48)

#Genres
puts "Creating Genres"
Genre.create(name:"Action")
Genre.create(name:"Drama")
Genre.create(name:"Comedy")

#Movies
puts "creating Movies"
Movie.create(name:"Django Unchained", rating:"R", release_date: 2012, actor_ids: [Actor.first.id], genre_id:Genre.first.id )
Movie.create(name:"Stepbrothers", rating:"R", release_date: 2008, actor_ids: [Actor.second.id, Actor.third.id], genre_id:Genre.third.id )
Movie.create(name:"Uncut Gems", rating:"R", release_date: 2019, actor_ids: [Actor.third.id], genre_id:Genre.second.id )
Movie.create(name:"Happy Gilmore", rating:"PG-13", release_date: 1996, actor_ids: [Actor.third.id], genre_id:Genre.third.id )
Movie.create(name:"Anchorman", rating:"PG-13", release_date: 2004, actor_ids: [Actor.second.id, Actor.fourth.id], genre_id:Genre.third.id )

#question about actor id & genre id


puts "✅ Done seeding!"
