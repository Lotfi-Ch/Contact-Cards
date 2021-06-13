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
        //console.log("backend", result)
        res.json(result)
    }).catch(err => console.error(err))
})

app.post('/create', (req, res) => {
    Cards.create(req.body).then(result => {
        console.log("data here in back", result)
        res.send(result)
    })

})

app.delete('/delete/:name', (req, res) => {
    Cards.deleteOne({ name: req.params.name }, (err, result) => {
        console.log("delete req");
        if (err) console.error(err)
        else {
            res.sendStatus(200)
        }
    })
})

app.patch('/create/recommand/:value', (req, res) => {
    console.log(req.params);
    Cards.findByIdAndUpdate(req.params.value, { $inc: { recommandations: 1 } }, { new: true })
        .then(result =>
            res.send(result))
        .catch(err => console.error(err))
});
app.patch('/create/Norecommand/:value', (req, res) => {
    console.log(req.params);
    Cards.findByIdAndUpdate(req.params.value, { $inc: { recommandations: - 1 } }, { new: true })
        .then(result =>
            res.send(result))
        .catch(err => console.error(err))
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})