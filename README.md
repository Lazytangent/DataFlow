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

1. `cd` into the repository
2. `cd` into the `backend` directory.
3. `npm install` the dependencies.
4. Make an `.env` file based on the `.env.example` file given.
5. Run this command to create the user based on the user defined in the `.env`
   file.
    ```bash
    psql -c "CREATE USER data_flow_app with PASSWORD 'password' CREATEDB;"
    ```
6. Run `npx dotenv sequelize db:create` to create the database.

### Frontend

1. In another terminal, `cd` into the `frontend` directory.
2. `npm install` the dependencies.

### Start the servers

In both terminals, run `npm start` to start the servers.

## Guided Walkthrough

Go to the [WALKTHROUGH.md](WALKTHROUGH.md) for the detailed walkthrough.

## Things of note

Go see [NOTES.md](NOTES.md) for some side notes on things you can read more
about.
