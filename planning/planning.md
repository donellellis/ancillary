## Planning

### Project Description

Ancillary is a furniture specification and budgeting tool for professional interior designers. The application allows designers to create and manage multiple projects from one dashboard. Ancillary includes a databse of commercially-available furniture that a designer can pull from and add to a project. Furniture selections are stored in a project and display information neeeded for specification, including the manufacturer, model name, model number, dimensions, and list price.

### User Stories

1. A user can sign-up or log-in
2. A user is redirected to a dashboard showing their projects after successful authentication
3. A user can add projects to their dashboard
4. A user can access a database of furniture
5. A user can select furniture from the database and add to their projects
6. A user can delete projects from their dashboard
7. A user can log-out

### Models

#### User

* email
* password
* projects

#### Project

* name
* client
* image
* chairs
* budget
* square footage

#### Chair

* manufacturer
* name
* model number
* dimensions
* image
* list price
* quantity
* tag