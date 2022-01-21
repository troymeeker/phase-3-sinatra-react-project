# ruby encoding: utf-8
puts "🌱 Seeding ..."

#Genres
puts "Creating Genres"

g1 = Genre.create(name:"Action")
g2 = Genre.create(name:"Drama")
g3 = Genre.create(name:"Comedy")

#Actors
puts "Creating Actors"

a1 = Actor.create(name:"Jamie Foxx", age: 54)
a2 = Actor.create(name:"Will Ferrell", age: 54) 
a3 = Actor.create(name:"Adam Sandler", age: 55)
a4 = Actor.create(name:"Kathryn Hahn", age: 48)

#Movies
puts "creating Movies"

m1 = Movie.create(name:"Django Unchained", rating:"R", release_date: 2012, genre_id: g1.id )
m2 = Movie.create(name:"Stepbrothers", rating:"R", release_date: 2008, genre_id: g3.id )
m3 = Movie.create(name:"Uncut Gems", rating:"R", release_date: 2019, genre_id: g2.id )
m4 = Movie.create(name:"Happy Gilmore", rating:"PG-13", release_date: 1996,  genre_id: g3.id )
m5 = Movie.create(name:"Anchorman", rating:"PG-13", release_date: 2004, genre_id: g3.id )


#ROle
Role.create(name:'Django', actor_id: a1.id, movie_id: m1.id )
Role.create(name:'Ron Burgundy', actor_id: a2.id , movie_id: m5.id)
Role.create(name:'Brennan Huff', actor_id:a2.id, movie_id: a2.id)
Role.create(name:'Howard Ratner', actor_id:a3.id, movie_id:m3.id)
Role.create(name:'Happy Gilmore', actor_id: a3.id, movie_id: m4.id)
Role.create(name: 'Alice', actor_id: a4.id, movie_id:m2.id)
Role.create(name: 'Helen', actor_id: a4.id, movie_id: m5.id)


puts "✅ Done seeding!"
