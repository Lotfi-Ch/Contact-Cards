const { Cards, db } = require("./database.js")



let data = [
    {
        name: "Karim",
        job: "Automotive technician",
        adress: "La soukra",
        contact: 22334455,
        picture: "https://images.unsplash.com/photo-1583955275036-fd20a9c185bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXV0b21vdGl2ZSUyMHRlY2huaWNpYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        recomendations: 4
    }, {
        name: "Mohamed",
        job: "Personal trainer",
        adress: "Lac II",
        contact: 22378927,
        picture: "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uYWwlMjB0cmFpbmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        recomendations: 6
    },
    {
        name: "Sami",
        job: "Plumber",
        adress: "La soukra",
        contact: 22304455,
        picture: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGx1bWJpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        recomendations: 8
    },
    {
        name: "Anis",
        job: "Electrician",
        adress: "La soukra",
        contact: 22332755,
        picture: "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        recomendations: 9
    },
    {
        name: "Aziz",
        job: "gardener",
        adress: "La Marsa",
        contact: 22497655,
        picture: "https://images.unsplash.com/photo-1586280268958-9483002d016a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVuZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        recomendations: 4
    },
    {
        name: "Hamdi",
        job: "Automotive technician",
        adress: "Le Kram",
        contact: 22334455,
        picture: "https://images.unsplash.com/photo-1583955275036-fd20a9c185bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXV0b21vdGl2ZSUyMHRlY2huaWNpYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        recomendations: 2
    },
    {
        name: "Amin",
        job: "Electrician",
        adress: "La soukra",
        contact: 22338054,
        picture: "https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        recomendations: 9
    }

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