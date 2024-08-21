// Import Dependencies
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TableHead from './TableHead.jsx';
import { FaRunning } from 'react-icons/fa';

// EDIT function  
export const UpdateExercise = ({ exercise }) => {

    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date.slice(0,10));

    const navigate = useNavigate();

    // exploration-implementing-a-full-stack-mern-app-part-2?module_item_id=21138419
    const editExercise = async () => {
        
       const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                reps: reps, 
                weight: weight, 
                unit: unit, 
                date: date
            }),
            headers: {
                'Content-Type': 'application/json',
            },
       
        });

        if (response.status === 200) {
            alert("You successfully edited that exercise.");
        } else {
            const errMessage = await response.json();
            alert(`That update failed due to status ${response.status}. ${errMessage.Error}`);
        }
        navigate("/exercisePage");
    };

    return (
      <>
          <h2><i><FaRunning /></i>Edit an Exercise</h2>
          <p>Use the icons to update one row of the exercise log.</p>
           
          <table id="logTable">
            <caption>Edit an exercise.</caption>
             <TableHead />
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label htmlFor="exname" >
                            <input type="text" value={name} id="exname" name="name" 
                                    onChange={e => setName(e.target.value)} 
                                    autoFocus
                                    />
                            </label></td>
                            
                        <td><label htmlFor="exreps" >
                            <input type="number" value={reps} id="exreps" name="reps" 
                                    onChange={e => setReps(e.target.value)} 
                                    />
                            </label></td>

                        <td><label htmlFor="exweight" >
                            <input type="number" value={weight} id="exweight" name="weight" 
                                onChange={e => setWeight(e.target.value)} 
                                />
                            </label>
                            <label htmlFor="exunit" ></label>
                             {/*<input type="text" id="exunit" name="unit" value={unit} 
                                onChange={e => setUnit(e.target.value)} 
                                maxlength="3" size="4"
                                />
                                */}
                                <select name='unit' 
                                    value={unit} 
                                    id="exunit"
                                    onChange={e => setUnit(e.target.value)}
                                >
                                    <option value='lbs'>Lbs</option>
                                    <option value='kgs'>Kgs</option>
                                    <option value='miles'>Miles</option> 
                                    <option value="kilometers">Km</option>
                                    <option value="minutes">Minutes</option>                     
                                </select> 

                                {/* <select value={unit.value} onChange={e => setUnit(e.target.value)}>
                                    <option value="Lbs">Lbs</option>
                                    <option value="Kgs">Kgs</option>
                                </select> */}

                            </td>


                        <td><label htmlFor="exdate" >
                            <input type="date" id="exdate" name="date" value={date} 
                                onChange={e => setDate(e.target.value)} 
                                />
                            </label></td> 

                        <td><button onClick={editExercise}>Save</button></td>

                    </tr>
                </tbody>
            </table>  
        </>
    );
}
export default UpdateExercise;

