// import express app
const app = require('./server');

// import mongoose
const mongoose = require('mongoose');

// connect to the database locally
console.log('Connecting to the database...');
// mongoose.connect('mongodb://localhost:27017/b52db')
//     .then(() => {
//         console.log('Connected to the database');
//     })
//     .catch((err) => {
//         console.log('Error connecting to the database', err);
//     });

// connect to the database on the cloud
mongoose.connect('mongodb+srv://sathishdatascientist:Guvi2023@cluster0.2r9mjwk.mongodb.net/b52db')
    .then(() => {
        console.log('Connected to the database');
        // start the server and listen to the port 3001
        app.listen(3001, () => {
            console.log(`Server running at http://localhost:3001/`);
        });
    })
    .catch((err) => {
        console.log('Error connecting to the database', err);
    });
