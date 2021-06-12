const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Cards', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("DB Connected")
});

const CardSchema = new mongoose.Schema({
    name: String,
    job: String,
    adress: String,
    contact: Number,
    picture: String
});

const Cards = mongoose.model('Cards', CardSchema);


module.exports = { db, Cards };