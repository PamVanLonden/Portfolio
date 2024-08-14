// Each row must include 2 icons from the React Icons library, one to support deleting the row and the other for updating the row.
//You can choose any suitable icon from the library that clearly indicates the correct use of clicking on it.

import React from 'react';
import { TiDelete, TiEdit } from 'react-icons/ti';

function ExerciseRow({ exercise, onDelete, onEdit  }) {
    
    return (
        <tr>
            <td><i><TiDelete onClick={() => onDelete(exercise._id)} title="Clicking the delete icon will quickly remove the row without confirmation. Are you sure you want to delete?"/></i></td>
            <td><i><TiEdit   onClick={() => onEdit(exercise)} title="Editing will occur on a new screen."/></i></td>
            <td title="What is the name of the exercise you completed?" >{exercise.name}</td>
            <td title="How many times did you complete that exercise?">{exercise.reps}</td>
            <td title="How much weight did you add in pounds or kilograms?">{exercise.weight} {exercise.unit}</td>
            {/* substring 0 is __ and 10 is characters. */}
            <td title="When did you complete that exercise?">{exercise.date.slice(0,10)}</td>
            <td></td>
        </tr>
    );
}

export default ExerciseRow;