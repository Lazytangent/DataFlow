# Walkthrough

This is meant as a refresher for walking you through the data flow in an
Express-React-Redux application with a PostgreSQL database. (Essentially a PERN
stack).

In this exercise, we will:

* Create a User model and migration and apply it to the database
* Create a `GET` route to fetch our users from the database
* Create a reducer for this new feature/slice of state
* Create a thunk that does the fetching from the API route
* Create an action creator that sets our data from the thunk into the Redux
    store
* Create an action type as a constant (`const`) to prevent typos being an issue
    in our reducer and actions
* Create a case in our reducer that matches the action type we've created
* Dispatch the thunk in our component as a side effect to fetch the data
* Select the data we've put into the store with the fetch from the dispatched
    thunk

## Table of Contents

* [Phase 1: Planning]
* [Phase 2: Database]
* [Phase 3: Express]
* [Phase 4: Redux]
* [Phase 5: React]

## Phase 1: Planning

First, you have to plan out what you want. This is when you choose an MVP or
feature to work on, and it's recommended that you work on that feature until it
is complete. For the CRUD (Create, Read, Update, Delete) operations on an MVP, I
would start with the Read (`GET` routes) then do Create (`POST`), Update (`PUT`
or `PATCH`), and Delete (`DELETE`) in that order. That's just how I do it. That
would mean planning out what you want to see on a certain page or set of pages,
so you can figure out what data you'll need from your database.

For this demo application, we'll be getting all the users and rendering them on
the page. There's already some magic working behind the scenes to filter out
users if the search bar is in use, but that's not the concern of this exercise.
For this exercise, we will:

* Create a User model and migration
* Create one backend API route to `GET` all the users.
* Create a thunk to `fetch` that API route and dispatch the data from the
response to an action creator.
* Create an action creator to apply the data it receives into the Redux store.
* Create a constant to use as the type of the action creator and be the case in
our reducer.
* Create a case in the reducer.
* Grab the information from the Redux store and render it in our React
component.

Things we will not be doing in this exercise:

* Set up the boilerplate code for the backend Express app.
* Set up the boilerplate code for a React app.
* Set up the boilerplate code for connecting Redux to the React app.

The goals of this exercise are:

* To familiarize you with the data-flow and how Redux sits between the React
application in the frontend and the Express application in the backend.
* To familiarize you with some of the patterns used when setting data into and
getting data out of the Redux store.

### NOTE

You DO NOT have to follow this walkthrough exactly. Some people prefer working
from the component to the Redux store to the backend, back to the Redux store,
and then finally back to the component. Some people prefer working from the
backend to the Redux store then to the component. Neither one is better than the
other, it's just a personal preference in how you work.

That said, since this walkthrough is done from the backend with creating and
testing the API route first, if you do want to use this walkthrough to work from
the frontend with the component first, it is suggested to read through all of
this walkthrough first before doing anything since it'll make more sense when
all put together. Otherwise, code along!

## Phase 2: Database

First, we'll set up a User model and migration to store our user data. In your
project, you'll probably be only doing database setup at the very beginning of
your project or as you start working on another MVP or general feature that
needs another table.

For the purposes of this exercise, run the following command to create a User
model with the right columns:

```sh
npx sequelize model:generate --name User --attributes "name:string, \
    username:string, email:string"
```

To set up your migration and model correctly, be sure to add the necessary
validations now so, at the very least, you'll have the model and migration
validations.

For our User migration, update your migration file to this:

```js
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
```

For our User model, update your model file to this:

```js
"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
```

After modifying your model and migration with the proper constaints (and
possibly associations, as well), you can run the `db:migrate` command to apply
the migration to your database.

```sh
npx dotenv sequelize db:migrate
```

For the purposes of this exercise, let's now also run the command to seed our
Users table.

```sh
npx dotenv sequelize db:seed:all
```

## Phase 3: Express

To complete the backend section of the data flow, you'll need to create the API
route that you will have respond with the appropriate information. In the case
of this example, this API endpoint will need to be a HTTP `GET` request to the
route `/api/users`.

Things you'll want to remember:

* Since you're going to be querying data from the database, you'll need to
    import the model that you'll be using.
* Because there is a database interaction, there will need to be some kind of handler
    that covers the asynchronous nature of database interactions.
* An endpoint also needs to do something with a response to complete the
    request-response cycle. Since this is an API route that just handles data,
    which method on the response should we use?

### Testing your API route

**Make sure your backend server is running before you try
testing the route!**

Once you've set up your API route, you can test it with [Postman] or [Insomnia].
If you're testing with either in your actual application with authentication,
make sure you remember to add the proper authentication tokens, which depends on
what you're using in that app.

For this exercise, we'll send a `GET` request to
`http://localhost:5000/api/users`, and since there's no authentication involved,
there's nothing we'll need to add to our headers to get things working once the
API route is written.

## Phase 4: Redux

To complete and test the Redux portion of the data flow process, you'll need to
do a few things:

* Create an action type constant
* Create an action creator that returns an action (just a POJO)
* Create a thunk that dispatches the action creator
* Create a reducer and add it to the store
* Create a case that matches the action type and returns a new state

### Testing your actions

**Make sure both your frontend and backend servers are running before you try
testing the actions!**

Since the configuration for connecting the Redux store and the actions is
already done in the `src/index.js` file, you can simply test the Redux thunk
you've written for this exercise by running something similar in the browser.

```javascript
window.store.dispatch(window.userActions.getUsers());
```

Because we've attached the `store` and `userActions` to the window object during
development, we can access those properties by keying into the window object and
dispatching the action manually. You can test your thunks (and action creators)
like so by making sure you've exported them properly from the store where
they're defined and imported them into `src/index.js` and attached them properly
to the window object.

## Phase 5: React

To complete this portion of the data flow process, you'll need to dispatch a
thunk to fetch the information and then render the information from the Redux
store in a component.

### Testing your components

**Make sure both your frontend and backend servers are running before you try to
test your components!**

To thoroughly test your components and make sure that they render the
appropriate data every time, you'll want to test that your component works as
intended:

* After a refresh of the browser, to simulate a user coming to that page from
    outside your site and with the Redux store starting off from the initial
    state.
* After coming from other pages from your app, where the Redux store may or may
    not be pre-populated with information since there may be overlapping
    information that you don't want to appear in the component you're working
    on.

Making sure that your component renders the correct information consistently, no
matter what page your user is coming from is important to creating a smooth and
predictable user experience.

[Phase 1: Planning]: #phase-1-planning
[Phase 2: Database]: #phase-2-database
[Phase 3: Express]: #phase-3-express
[Phase 4: Redux]: #phase-4-redux
[Phase 5: React]: #phase-5-react

[Postman]: https://www.postman.com/
[Insomnia]: https://insomnia.rest/
