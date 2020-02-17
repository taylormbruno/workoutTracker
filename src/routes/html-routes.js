// const router = require('express').Router();
// const Transaction = require('../models/transaction.js');

const path = require('path');

module.exports = function(app) {
    app.get('/', (req ,res) => {
        // res.render('index');
        res.sendFile(path.join(__dirname + '../../../public/index.html'));
    });

    app.get('/stats', (req ,res) => {
        // res.render('stats');
        res.sendFile(path.join(__dirname + '../../../public/stats.html'));
    });

    app.get('/exercise', (req ,res) => {
        // res.render('exercise');
        res.sendFile(path.join(__dirname + '../../../public/exercise.html'));
    });
};