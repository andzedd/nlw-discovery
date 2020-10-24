const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '..', '/public')));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get("/", (req,res) => {
    return res.render('index')
})

app.get("/orphanages", (req,res) => {
    return res.render('orphanages')
})

app.get("/create-orphanage", (req,res) => {
    return res.render('create-orphanage')
})

app.get("/orphanage", (req,res) => {
    return res.render('orphanage')
})

app.listen(3000, () => {
    console.log("Server is up")
});