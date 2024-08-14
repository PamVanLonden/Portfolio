// component must get the data by calling the 
// endpoint GET /exercises in the REST API.

// import React from 'react';
import ExerciseRow from './ExerciseRow.jsx';
import TableHead from './TableHead.jsx';

function ExercisesTable({ exercises, onDelete, onEdit  }) {
    return (
        <table id="logTable">
            <caption>Log of recent exercises completed.</caption>
            <TableHead />
            <tbody>
                {exercises.map((exercise, i) => 
                    <ExerciseRow 
                        exercise={exercise} 
                        key={i} 
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
            <tfoot>
             
            </tfoot>
        </table>
    );
}

export default ExercisesTable;




/* This function includes a FORM BUTTON on to select the quantity.
 create rows of data from data/items.js 
let table = document.getElementById('items');
let tbody = table.getElementsByTagName('tbody')[0];

for (item of items) {
  let row = document.createElement('tr');

  row.innerHTML = 
      `<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>$${item.price}</td>
          <td>
              <label for="item">
                  <input type="number" name="item" id="" value="${items.id}"  />
              </label>
          </td>
      </tr>
      `;

  tbody.appendChild(row);
};
*/