const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

// Exercise data
const exercises = {
    'Push ups': {
        exerciseName: 'Push ups',
        numberOfSets: 5,
        reps: 20,
        duration: '1:00',
        restTime: '3:00',
    },
    'Sit ups': {
        exerciseName: 'Sit ups',
        numberOfSets: 4,
        reps: 25,
        duration: '2:00',
        restTime: '3:00',
    },
    'Squats': {
        exerciseName: 'Squats',
        numberOfSets: 4,
        reps: 15,
        duration: '1:30',
        restTime: '2:00',
    },
    'Interval running': {
        exerciseName: 'Interval running',
        numberOfSets: 6,
        reps: 1,
        duration: '4:00',
        restTime: '1:00',
    },
};

app.get('/api/recommended-exercise', (req, res) => {
    const { exercise } = req.query;

    if (exercise && exercises.hasOwnProperty(exercise)) {
        res.json(exercises[exercise]);
    } else {
        res.status(400).json({ error: 'Invalid exercise name' });
    }
});

app.listen(port, () => {
    console.log('Microservice listening at localhost 3001');
})

