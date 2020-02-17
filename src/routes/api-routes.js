const router = require('express').Router();
const Transaction = require('../models/transaction.js');

module.exports = function() {
    // to view last workout
    router.get('/api/workouts', (req, res) => {
        Transaction.find({})
            .sort({ date: -1})
            .then( dbTransaction => {
                res.json(dbTransaction);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    
    router.post('/api/workouts', ({ body }, res) => {
        console.log(body);
        let newWorkout;
        res.json(newWorkout);
    });

    // to update workout
    router.put('/api/workouts/:id', ({ body }, res) => {
        console.log(body);
        // let id = req.params.id;
        let updWorkout;
        res.json(updWorkout);
    });

    // to receive workouts in range
    router.get('/api/workouts/range', (req, res) => {
        console.log(req.body);
        let range;
        res.json(range);
    });

};