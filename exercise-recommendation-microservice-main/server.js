const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs');
const port = 3001

app.use(cors())

let exercises = {};

// This function reads each line in the text file
// and store the data in the 'exercise' object.
//                              Example:
// exercise name                Push ups
// number of sets               5
// number of reps               20
// exercise duration time       1:00
// break time between sets      3:00
fs.readFile('exercises.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    let lines = data.split('\n');
    
    for(let i = 0; i < lines.length; i+=5){
        let exerciseName = lines[i].trim();
        exercises[exerciseName] = {
            exerciseName,
            numberOfSets: Number(lines[i+1]),
            reps: Number(lines[i+2]),
            duration: lines[i+3].trim(),
            restTime: lines[i+4].trim(),
        }
    }
});

// route handler for GET requests
app.get('/api/recommended-exercise', (req, res) => {
    const { exercise } = req.query;
    const exerciseData = exercises[exercise];

    if (exerciseData) {
        res.json(exerciseData);
    } else {
        res.status(400).json({ error: 'Invalid exercise name' });
    }
});

app.listen(port, () => {
    console.log(`Microservice listening at localhost ${port}`);
});

