import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

//import components 
import ExercisesTable from './ExercisesTable';
import { FaRunning } from 'react-icons/fa';

// Use SPA render home page content
function RetrieveExercises({ setExercise }) {
  
    // use navigate (replaces use of history)
    const navigate = useNavigate();

    // use state to bring in the data
    const [exercises, setExercises] = useState([]);


    // RETRIEVE the list of exercises
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    }  

    // UPDATE a single exercise
    const onEditExercise = async exercise => {
        setExercise(exercise);
        navigate("/updateExercise");
    }

 
    // DELETE a single exercise
    // exploration-implementing-a-full-stack-mern-app-part-2?module_item_id=21138419
    const onDeleteExercise = async id => {
        const response = await fetch(`/exercises/${id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/exercises');
            const exercises = await getResponse.json();
            setExercises(exercises);
        } else {
            console.error(`The row for id:${id} failed to delete due to (status code = ${response.status}).`)
        }
    }	

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2><i><FaRunning /></i>Log of Exercises</h2>
            <article>
                <p>Click the plus, delete, or edit icons to
                    modify the Exercise Collection. 
                </p>
                {/* onEdit and onDelete are not passed 
                    to the EditPage or delete function; 
                */}
                <ExercisesTable 
                    exercises={exercises} 
                    onDelete={onDeleteExercise}
                    onEdit={onEditExercise} 
                />
              </article>  
        </>
    );
}

export default RetrieveExercises;
  