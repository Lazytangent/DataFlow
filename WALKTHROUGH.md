# Walkthrough

This is meant as a refresher for walking you through the data flow in an
Express-React-Redux application with a PostgreSQL database. (Essentially a PERN
stack).

## Table of Contents

* [Phase 1: Planning]
* [Phase 2: Express]
* [Phase 3: Redux]
* [Phase 4: React]

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

* To familiarize you with the data-flow and how Redux sits between the React application in the frontend and the Express application in the backend.
* To familiarize you with some of the patterns used when setting data into and getting data out of the Redux store.

### NOTE

You DO NOT have to follow this walkthrough exactly. Some people prefer working from the component to the Redux store to the backend, back to the Redux store, and then finally back to the component. Some people prefer working from the backend to the Redux store then to the component. Neither one is better than the other, it's just a personal preference in how you work.

That said, since this walkthrough is done from the backend with creating and testing the API route first, if you do want to use this walkthrough to work from the frontend with the component first, it is suggested to read through all of this walkthrough first before doing anything since it'll make more sense when all put together. Otherwise, code along!

## Phase 2: Express

[Phase 1: Planning]: #phase-1-planning
[Phase 2: Express]: #phase-2-express
[Phase 3: Redux]: #phase-3-redux
[Phase 4: React]: #phase-4-react