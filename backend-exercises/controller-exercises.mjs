// This controller uses REST rather than Express style.
import 'dotenv/config';
import express from 'express';
import * as exercises from './models-exercises.mjs';

const PORT = process.env.PORT;
const app = express();

// REST needs JSON MIME type.
app.use(express.json());


/* BEGIN controllers **************** */

// CREATE exercise
app.post('/exercises', (req, res) => {
    exercises.createExercise(
        req.body.name, 
        req.body.reps, 
        req.body.weight, 
        req.body.unit, 
        req.body.date
    )
        .then(exercise => {
            console.log(`"${exercise.name}" was added to the collection.`);
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Creation of an exercise document failed, due to invalid syntax.' });
        });
});

// RETRIEVE Exercises
app.get('/exercises', (req, res) => {
    exercises.findExercise()
    .then(exercise => { 
        if (exercise !== null) {
            console.log(`All exercises were retrieved from the collection.`);
            res.json(exercise);
        } else {
            res.status(404).json({ Error: 'That exercise document was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Your request to retrieve an exercise document failed.' });
    });

});

// RETRIEVE exercise by ID controller
app.get('/exercises/:_id', (req, res) => {
    exercises.findExerciseById(req.params._id)
    .then(exercise => { 
        if (exercise !== null) {
            console.log(`"${exercise.name}" was retrieved, based on its ID.`);
            res.json(exercise);
        } else {
            res.status(404).json({ Error: 'That exercise could not be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'That exercise could not be found.' });
    });

});

// UPDATE exercise
 app.put('/exercises/:_id', (req, res) => {
     // Notice use of params.id
     exercises.replaceExercise(
         req.params._id, 
         req.body.name, 
         req.body.reps, 
         req.body.weight, 
         req.body.unit, 
         req.body.date
        )
        .then(exercise => {
            console.log(`"${exercises.name}" was updated.`);
            res.json(exercise);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Your request to replace a document failed due to an input error.' });
        });
});

// DELETE exercises
 app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            // delete one.
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} was deleted.`);
                res.status(200).send();
            } else {// or respond with an error that that ID was not found.
                res.status(404).json({ error: 'That document does not exist.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.send({ error: 'Your request to delete by ID failed.' });
        });
});
 
// REST and Express listen to the port noted above.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});