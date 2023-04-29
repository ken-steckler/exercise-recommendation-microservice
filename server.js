const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/recommended-exercise', (req, res) => {
    const exerciseName = 'pushups'
    const numberOfSets = 5
    const reps = 20
    const duration = 60
    const breakDuration = 30


    const exercise = {
        exerciseName,
        numberOfSets, 
        reps,
        duration,
        breakDuration
    }

    res.json(exercise);
})

app.listen(port, () => {
    console.log('Microservice listening at localhost 3000');
})

