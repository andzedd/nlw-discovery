const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const app = express();

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(express.urlencoded({extended: true }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get("/", pages.index)

app.get("/orphanages", pages.orphanages)

app.get("/create-orphanage", pages.createOrphanage)

app.post("/save-orphanage", pages.saveOrphanage)

app.get("/orphanage", pages.orphanage)

app.listen(3000, () => {
    console.log("Server is up")
});