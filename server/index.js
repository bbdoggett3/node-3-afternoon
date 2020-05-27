require("dotenv").config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./products_controller');

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

//endpoints
app.post('/api/products', ctrl.create); //create
app.get('/api/products', ctrl.getAll); //getAll
app.get('/api/products/:id', ctrl.getOne); //getOne
app.put('/api/products/:id', ctrl.update); //update
app.delete('/api/products/:id', ctrl.delete); //delete




app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
