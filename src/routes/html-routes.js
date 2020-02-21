// const router = require('express').Router();
// const Transaction = require('../models/transaction.js');

const path = require('path');

module.exports = function(app) {
    app.get('/', (req ,res) => {
        // res.render('index');
        // eslint-disable-next-line no-undef
        res.sendFile(path.join(__dirname + '../../../public/index.html'));
    });

    app.get('/stats', (req ,res) => {
        // res.render('stats');
        // eslint-disable-next-line no-undef
        res.sendFile(path.join(__dirname + '../../../public/stats.html'));
    });

    app.get('/exercise', (req ,res) => {
        // res.render('exercise');
        // eslint-disable-next-line no-undef
        res.sendFile(path.join(__dirname + '../../../public/exercise.html'));
    });

    // app.get('/exercise?', (req ,res) => {
    //     // eslint-disable-next-line no-undef
    //     res.sendFile(path.join(__dirname + '../../../public/exercise.html'));
    // });

};