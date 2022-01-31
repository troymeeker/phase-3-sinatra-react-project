-Description:
This application connects the Sinatra and Active Record backend to the React frontend in order to display, create, and delete various Genres, Movies, and Actors that were created by the models and migrations in the backend database. This application was created to show basic one to many and many to many relationships, as well as the creation and connection of a backend Database using Sinatra and Active Record. 

-Frontend:
The frontend of this application is designed with React, and fetches data that was created on the backend through port 3000.
The frontend contains controlled forms to add Actors and Movies to the database and contains functionality to delete the added and the original Actors and Movies from the database.

Frontend Setup:

-  cd into cd into phase-3-sinatra-react-project, then cd into client and run npm start

-Backend:
The backend of this application is designed with Sinatra and Active Record and fetches data using 9292.

By first creating the models, I established the relationships between the models, then I created the tables/migrations which tell each table what it will contain.

This process creates the framework for the seeds.rb file, which is essentially the database. The data in the seeds file connects the models and gives visual representation of what each table and the contents of the table will contain.

This data is managed and extracted by the methods in the applicationController, which are the fetch requests that make changes to the data in the database, but will be displayed on the Frontend. 

Backend setup:

-From a new Terminal window, cd into phase-3-sinatra-react-project and run rake server

Thanks for visiting! 

Project Status:
This project was completed to show basic one to many, and many to many relationships to satisfy the requirements of the Phase 3 project for Flatiron School as of 1/29/2022. I plan on making additions to this project in the future.
