const { Cards, db } = require("./database.js")



let data = [
    {
        name: "Karim",
        job: "Automotive technician",
        adress: "La soukra",
        contact: 22334455,
        picture: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5pY2lhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    }, {
        name: "Mohamed",
        job: "Personal trainer",
        adress: "Lac II",
        contact: 22378927,
        picture: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5pY2lhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        name: "Sami",
        job: "Plumber",
        adress: "La soukra",
        contact: 22304455,
        picture: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5pY2lhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        name: "Anis",
        job: "Electrician",
        adress: "La soukra",
        contact: 22332755,
        picture: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5pY2lhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        name: "Aziz",
        job: "gardener",
        adress: "La Marsa",
        contact: 22497655,
        picture: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5pY2lhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        name: "Hamdi",
        job: "Automotive technician",
        adress: "Le Kram",
        contact: 22334455,
        picture: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5pY2lhbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },

]


const insertCards = function () {
    Cards.create(data)
        .then(() => {
            console.log("Database filled");
        })
        .catch((error) => {
            console.log("error in the database: ", error);
        })
        .finally(() => {
            db.close();
        });
};

insertCards();


//don't forget to run this file with node to fill your data



module.exports = data;