# Ancillary

Ancillary is a furniture specification and budgeting tool for professional interior designers. The application allows designers to create and manage multiple projects from one dashboard. Ancillary includes a databse of commercially-available furniture that a designer can pull from and add to a project. Furniture selections are stored in a project and display information neeeded for specification, including the manufacturer, model name, model number, dimensions, and list price.

### A Digital Transformation

>Ancillary aims to improve an existing industry process. Currently, the initial workflow of selecting furniture and creating a specification book is time intensive and results in a large-scale duplication of efffort. A designer spends hours scrolling through furniture manufacturer websites and manually finding and documenting the specifications, saving product images, and asking reps for current list prices. By creating a database of commercially-available furniture, Ancillary saves designers time and money.

## Deployed
http://ancillary.surge.sh/

## Getting Started

For deployment and testing purposes, clone this repository on GitHub and change into the directory.

![Ancillary](https://i.imgur.com/o01n8mg.jpg?2)

## Installing

### Front End

To install all necessary dependencies, run
```
$ npm install
```
To launch the app locally, run
```
$ npm start
```

### Back End

You can find the back end of this app and installation instructions [here](https://github.com/donellellis/ancillary-api) .

## Built With

* MongoDB
* Express
* React
* Node
* Mongoose
* Passport-jwt
* CSS

## Contributing

Contributions not accepted at this time.

## Future Features
* Ancillary will be expanded to include a budgeting feature that will calculate the current furniture budget based on the project square footage and list price and quantities of furniture specified. The budget will be included for each project on the dashboard so a designer can quickly and easily track the budget.
* Filters will be added to the furniture databse show page so that a designer can quickly select an item based on desired price range or other properties.
* Currently the furniture database is seeded, but a future feature will use apis from major furniture manufacturers.

## Authors

* **Donell Ellis** https://github.com/donellellis
