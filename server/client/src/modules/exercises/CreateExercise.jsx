import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TableHead from './TableHead.jsx';
import { FaRunning } from 'react-icons/fa';


export const CreateExercise = () => {
    const [name,   setName]   = useState('Walking');
    const [reps,   setReps]   = useState('1');
    const [weight, setWeight] = useState('0');
    const [unit,   setUnit]   = useState('miles');
    const [date,   setDate]   = useState();

    const navigate = useNavigate();

    const addExercise = async (event) => {
        event.preventDefault();

        const newExercise = { name, reps, weight, unit, date };
        try {
            const response = await fetch('/exercises', {
                method: 'POST',
                body: JSON.stringify(newExercise),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if(response.status === 201){
                alert("You successfully added an exercise to a row in the collection.");
                navigate("/exercisePage");
            } else {
                alert(`That input failed, due to missing data: (status code = ${response.status}).`);
            }

        } catch (error) {
            alert(`That input failed, due to missing data: (status code = ${response.status}).`);
        }
    };
  
       return (
        <>
            <h2><i><FaRunning /></i>Log an Exercise.</h2>
            <article>
            <p>Add today's completed set of exercises.</p>
            <form id="exercises" onSubmit={addExercise} >

            <table id="logTable">
                <caption>Add an exercise to the Log.</caption>
                <TableHead />
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label htmlFor="exname" >
                            <input type="text" value={name} id="exname" name="name" 
                                    onChange={e => setName(e.target.value)}
                                    autoFocus
                                    required
                             />
                            </label></td>
                            
                        <td><label htmlFor="exreps" >
                            <input 
                                type="number" 
                                value={reps} 
                                id="exreps" 
                                name="reps" 
                                onChange={e => setReps(e.target.value)} 
                                required
                            />
                            </label> 
                        </td>

                        <td><label htmlFor="exweight" >
                            <input type="number" 
                                value={weight} id="exweight" name="weight" 
                                onChange={e => setWeight(e.target.value)} 
                                 />
                            </label>
                            
                            <label htmlFor="exunit" >
                             {/*<input type="text" id="exunit" name="unit" value={unit} 
                                onChange={e => setUnit(e.target.value)} 
                                maxlength="3" size="4"
                                />
                                */}
                                <select 
                                    name='unit' 
                                    value={unit} 
                                    onChange={e => setUnit(e.target.value)} 
                                    required
                                >
                                   {/* <option value="" disabled>Select something...</option> */}
                                    <option value="lbs">Lbs</option>
                                    <option value="kgs">Kgs</option>
                                    <option value="miles">Miles</option>
                                    <option value="kilometers">Km</option>
                                    <option value="minutes">Minutes</option>
                                </select> 
                            </label>
                        </td>

                        <td><label htmlFor="exdate">
                            <input type="date" id="exdate" name="date" value={date} 
                                onChange={e => setDate(e.target.value)}
                                // pattern="\d{2}-\d{2}-\d{2}"
                                required
                                />
                                {/*<!--
                                placeholder="MM-DD-YY" required 
                                pattern="(?:19|22)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))" 
                                --> */}
                                
                            </label>
                        </td> 
                        <td><button className="wait" type="submit" >Save</button></td>
                    </tr>
                </tbody>
            </table> 
            </form>
            </article>
        </>
    );
}

export default CreateExercise;

// date formatting
// https://html.form.guide/html5/html-input-type-date-format/