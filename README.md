# Data Flow Lecture

Clone me!

HTTPS:
```bash
git clone https://github.com/Lazytangent/DataFlow.git
```

SSH:
```bash
git clone git@github.com:Lazytangent/DataFlow.git
```

## Phase 0: Set Up
### Backend

1. `cd` into the `backend` directory.
2. `npm install` the dependencies.
3. Make an `.env` file based on the `.env.example` file given.
4. Run this command to create the user based on the user defined in the `.env` file.
    ```bash
    psql -c "CREATE USER data_flow_app with PASSWORD 'password' CREATEDB;"
    ```
5. Run `npx dotenv sequelize db:create` to create the database.
6. Run `npx dotenv sequelize db:migrate` to run the migrations and apply them to your local database.
7. Run `npx dotenv sequelize db:seed:all` to run the seeder file and apply them to your local database.

### Frontend

1. In another terminal, `cd` into the `frontend` directory.
2. `npm install` the dependencies.

### Start the servers

In both terminals, run `npm start` to start the servers.

## Guided Walkthrough

Go to the INSTRUCTIONS.md for the detailed walkthrough.
