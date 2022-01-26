-Overview:
This app connects my Sinatra and Active Record backend to the React frontend to display, create, and delete various Genres, Movies, and Actors that were created by models and migrations in my backend. 

-Backend:
The backend of this application is designed with Sinatra and Active Record and utilizes port 9292. 

By first creating the models, I established the relationships between the models, then I created the migrations which tell each table what it will contain. 

This process all creates the framework for the seeds.rb file, which is essentially the database. The data in the seeds file connects the models and gives visual representation of what each table and the contents of the table will contain. 

This data is managed and extracted by the methods in the applicationController, which is what represents the actions that will occur on the front end. 

-Frontend:
The frontend of this application is designed with React, and utilizes port 3000. 
