# pb138 - Student organiser
#### run the commands in the backend directory

## Database set up

#### Ideally do not even have postgres installed locally

before setting up the database be sure to turn off your local postgres db
```
systemctl status postgresql
sudo systemctl stop postgresql      # if postgres is active
```
For windows: Win + r -> services.msc -> find postgres


setting up the database
```
npm run devdb:up # sets up the development database
npm run devdb:down # shuts down the development database
```

you can check the database with:
```
npx prisma studio
```
ak je postgres problem s authentication good luck

## Deploy
```
npm run deploy:up
npm run deploy:down
```
Deploy is running at: http://localhost:3000/

Zatial sa vzdy pri deploy:up znovu seedne databaza


## API Docs
```
npm run dev
```
Api documentation is running at http://localhost:3000/api-documentation/