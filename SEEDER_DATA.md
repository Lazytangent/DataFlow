# How to Create Seeder Data for This Project

There's one seeder file for this project that seeds the one table from the
migration. That seeder file will read for a `users.json` in the
`backend/db/seeder-content` directory. The `users.json` file should contain an
array of "User" objects, and each "User" object should have the following
attributes:

* username: string
* name: string
* email: string

There's already a really basic `users.json` in the `backend/db/seeder-content`
directory that you can use to base your data off of.
