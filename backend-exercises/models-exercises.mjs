// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Unable to connect to the MongoDB Atlas Cluster.' });
    } else  {
        console.log(`Connection to the 'Exercises' collection on the MongoDB Atlas Cluster succeeded.`);
    }
});

//Define the schema
const exerciseSchema = mongoose.Schema({
    name:   { type: String, required: true },
    reps:   { type: Number, required: true },
    weight: { type: Number, 
              required: true, 
              default: 0, 
              min:[0, 'Empty values are not allowed'] },
    unit:   { type: String, 
              required: true, 
              default: 'lbs', 
              min:[0, 'Empty values are not allowed'] },
    date:   { type: Date,   required: true, min: '2023-03-08', default: Date.now}
});

/* NAME the MODEL and the COLLECTION */

const Exercise = mongoose.model('Exercise', exerciseSchema, 'exercises');
/*       A                          B                           C, D

A. MongoDB automatically names the collection based on this variable name
   and it appends 's'. 
C. Force your own name for the collection by listing it in the model().
B. Name of the model, which gets used in the CRUD variables.  
D. The /collectionName will be the route endpoint where data is displayed, 
   so it can be fetched by the frontend.
*/


// CREATE model *****************************************
const createExercise = async (name, reps, weight, unit, date) => {
    // Call the constructor to create an instance of the model class Exercise
    const exercise = new Exercise({
        name: name, 
        reps: reps, 
        weight: weight, 
        unit: unit, 
        date: date
    });
    return exercise.save();
}

// RETRIEVE models *****************************************
// Retrieve all documents and return a promise.
const findExercise = async () => {
    const query = Exercise.find().sort({date:-1});
    return query.exec();
}

const findExerciseById = async (_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}

// UPDATE models *****************************************************
const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({ _id: _id }, {
        name: name, 
        reps: reps, 
        weight: weight, 
        unit: unit, 
        date: date
    });
    return { 
        _id: _id, 
        name: name, 
        reps: reps, 
        weight: weight, 
        unit: unit, 
        date: date 
    }
}


// DELETE exercise based on _id  *****************************************
const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({ _id: _id });
    // Return the count of deleted document. 
    // Since we called deleteOne, this will be either 0 or 1.
    return result.deletedCount;
}



export { createExercise, findExercise, findExerciseById, replaceExercise, deleteById }