require("dotenv").config();
const express = require('express');
const massive = require('massive');

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log("Database is connected")
}).catch(error => console.log(error));


app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
