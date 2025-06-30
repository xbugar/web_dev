# Backend
#### Run these commands from the backend directory.

Ensure Docker is running before starting.

### You can start backend with:
```
npm i
cp .env.example .env # copy the content of the example into the .env file
npm run start # this will start a docker container with the database and the server on port 3000
```
This should set up everything automatically. Check package.json for additional available scripts.

## API Docs
Api documentation is running at http://localhost:3000/api-documentation/.

## Database
```
npm run db:up # starts the Docker container for the database
npx prisma migrate dev --name test # applies migrations
npx prisma db seed # seeds the database with crucial data
```

## Server
The database must be running before starting the server.
```
npm run dev
```

## Test
The database must be running before starting the test.
```
npm run test
```
