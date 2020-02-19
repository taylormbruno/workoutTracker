const router = require('express').Router();
const Workout = require('../models/workout.js');

// module.exports = function() {
// getLastWorkout
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    // .sort({ date: -1})
        .then( dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
    
// createWorkout
router.post('/api/workouts', ({ body }, res) => {
    console.log('------Line 19------');
    console.log(body);
    Workout.create(body)
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch (err => {
            res.status(400).json(err);
        });
});

// addExercise
router.put('/api/workouts/:id', ({ body }, res) => {
    console.log('------Line 32------');
    console.log(body);
    // let id = req.params.id;
    let updWorkout;
    res.json(updWorkout);
});

// getWorkoutsInRange
router.get('/api/workouts/range', (req, res) => {
    console.log('------Line 41------');
    console.log(req.body);
    let range;
    res.json(range);
});

// };
module.exports = router;