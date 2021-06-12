const express = require('express')
const app = express()
const port = 3002
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));

const { Cards } = require("../Back-end/DB/database.js");

app.use(express.static(path.join(__dirname, "..", "client", "build")))

app.get('/Cards', (req, res) => {
    Cards.find().then(result => {
        console.log("backend", result)
        res.json(result)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})