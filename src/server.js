const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '..', '/public')));

app.get("/", (req,res) => {
    return res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get("/orphanages", (req,res) => {
    return res.sendFile(path.join(__dirname, 'views', 'orphanages.html'))
})

app.get("/create-orphanage", (req,res) => {
    return res.sendFile(path.join(__dirname, 'views', 'create-orphanage.html'))
})

app.listen(3000, () => {
    console.log("Server is up")
});