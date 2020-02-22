const router = require('express').Router();
const Exercise = require('../models/exercise.js');
// const Workout = require('../models/workout.js');

// getLastWorkout // done
router.get('/api/workouts', (req, res) => {
    Exercise.find({})
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// addExercise
router.put('/api/workouts/:id', (req, res) => {
    console.log('------Line 20------');
    console.log(req.body);
    // let exReq = req.body;
    // let id = req.params.id;
    // console.log('ID: \n', id);
    // use , { upsert: true } ??
    if (req.params.id === undefined) {
        console.log(req.body);

        Exercise.create(req.body)
            // .then(({ _id }) => Workout.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
            .then(dbUser => {
                console.log(dbUser);
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    }
    else {
        console.log(req.body);
        Exercise.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body }}, {new: true}, function (err, exercise) {
            console.log(exercise);
            res.json(exercise);
            if (err) {
                res.status(400).json(err);
            }
        });
    }
});   

// createWorkout
router.post('/api/workouts', ({ body }, res) => {
    console.log('------Line 29------');
    console.log(body);
    Exercise.create({
        day: new Date().setDate(new Date().getDate()-10),
        exercises: []
    })
        .then(newWorkout => {
            console.log('newWorkout:\n ', newWorkout);
            res.json(newWorkout);
        })
        .catch (err => {
            res.status(400).json(err);
        });
});



// getWorkoutsInRange
router.get('/api/workouts/range', (req, res) => {
    console.log('------Line 41------');
    Exercise.find({})
        .then(dbRange => {
            console.log(dbRange);
            res.json(dbRange);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;