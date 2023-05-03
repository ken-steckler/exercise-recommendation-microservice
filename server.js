const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/recommended-exercise', (req, res) => {
    const exerciseName = 'push ups'
    const numberOfSets = 5
    const reps = 20
    const duration = 1
    const restTime = 0.3


    const exercise = {
        exerciseName,
        numberOfSets, 
        reps,
        duration,
        restTime
    }

    res.json(exercise);
})

app.listen(port, () => {
    console.log('Microservice listening at localhost 3001');
})

