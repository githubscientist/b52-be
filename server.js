// import express
const express = require('express');

// create a server
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;