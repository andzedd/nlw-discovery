const express = require('express');
const app = express();

const path = require('path')


app.get("/", (req,res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(3000, () => {
    console.log("Server is up")
});