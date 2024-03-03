// import mongoose
const mongoose = require('mongoose');

// connect to the database
console.log('Connecting to the database...');
mongoose.connect('mongodb://localhost:27017/b52db')
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.log('Error connecting to the database', err);
    });