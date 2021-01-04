# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: animal_id and in the sightings model

  Researched answer:



2. Which RESTful routes must always be passed params? Why?

  Your answer: create/update - will call the params method, update, show, destroy - will need an id

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: model, controller, resource, migration, RSpec, scaffold

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /users    index, gets all the stuff      

method="GET"    /users/1  show, displays the entry that matches the id

method="GET"    /users/new  new, displays a form

method="GET"    /users/edit/1    edit, displays a form for editing

method="POST"   /users    create, creates a new user in the database       

method="PUT"    /users/1      update, updating the user with an id of 1

method="DELETE" /users/1    destroy, deletes the user at id 1  



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started.
