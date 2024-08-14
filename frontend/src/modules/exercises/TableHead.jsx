import React from 'react';
import { Link } from 'react-router-dom';
import { TiDocumentAdd } from "react-icons/ti";

function TableHead() {
    return (
        <thead>
            <tr>
                <th title="Clicking the delete icon will quickly remove the row without confirmation. Are you sure you want to delete?">Delete</th>
                <th title="Editing will occur on a new screen, which redirects to the Home page log">Edit</th>
                <th title="What is the name of the exercise you completed?">Name</th>
                <th title="How many times did you complete that exercise?">Reps</th>
                <th title="How much weight did you add, in pounds or kilos?">Weight &amp; Unit</th>
                <th title="When did you complete that exercise?">Date</th>
                <th><Link to="../createExercise"><i><TiDocumentAdd title="Add an exercise" /></i></Link></th>
            </tr>
        </thead>
    );
}
export default TableHead;