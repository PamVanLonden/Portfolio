// import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Movie({ movie, onEdit, onDelete }) {
    return (
        <tr>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.language}</td>

            {/* Update these icons to something that matches your style. */}
            <td><i><MdDeleteForever onClick={() => onDelete(movie._id)} /></i></td>
            <td><i><MdEdit onClick={() => onEdit(movie)} /></i></td>
        </tr>
    );
}

export default Movie;