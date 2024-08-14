// Each row must include 2 icons from the React Icons library, one to support deleting the row and the other for updating the row.
//You can choose any suitable icon from the library that clearly indicates the correct use of clicking on it.

import React from 'react';
import { TiDelete, TiEdit } from 'react-icons/ti';
// import { Link } from 'react-router-dom';

function ArtCardDS({ painting, onDelete, onEdit  }) {
    
    return (

        <details>
            <summary>{painting.title}<img src={painting.imgurl} alt={painting.title} /></summary>
            <p><strong>{painting.title}</strong> is a {painting.width} x {painting.height} x {painting.depth}-inch&nbsp;
                {painting.genre}&nbsp;
                {painting.media} painting created on&nbsp;
                {painting.date.slice(0,10)}.&nbsp; 
                {painting.descr} 
                <br /><i><TiDelete onClick={() => onDelete(painting._id)}  /></i>
                <i><TiEdit   onClick={() => onEdit(painting)}        /></i>  
                {/* <Link to="../edit-art">
                    <i><TiEdit  title="Editing will occur on a new screen, which redirects to the Art Gallery page."/></i> 
                </Link>  */}
            </p>
        </details>
    );
    // title="Editing will occur on a new screen, which redirects to the Art Gallery page."
    // title="Clicking the delete icon will quickly remove the card without confirmation. Are you sure you want to delete?"
}

export default ArtCardDS;