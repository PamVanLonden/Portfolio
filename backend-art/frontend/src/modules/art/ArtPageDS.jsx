import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import ArtGalleryDS from './ArtGalleryDS.jsx';
import { RiGalleryFill } from 'react-icons/ri';
import { TiDocumentAdd } from "react-icons/ti";

function ArtPage({ setPainting }) {
  
    const navigate = useNavigate();

    const [paintings, setPaintings] = useState([]);

    const loadArt = async () => {
        const response = await fetch('/arts');
        const paintings = await response.json();
        setPaintings(paintings);
    }  

    const onEditArt = async painting => {
        setPainting(painting);
        navigate("/updatePainting");
    }


    const onDeleteArt = async _id => {
        const response = await fetch(`/arts/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/arts');
            const paintings = await getResponse.json();
            setPaintings(paintings);
        } else {
            console.error(`Failed to delete the Art card with id:${_id} (status code = ${response.status}).`)
        }
    }	

    useEffect(() => {
        loadArt();
    }, []);

    return (
        <>
            <h2><i><RiGalleryFill /></i>Recent Art</h2>
            <article id="artcard">
            <p>Click the arrow to read about each painting, 
                    then use the icons to update or delete a card.
                </p>
                <p><Link to="/createPainting"><i><TiDocumentAdd color="" title="Add a painting."  /></i></Link> 
                 Add a painting.
                </p>
                <ArtGalleryDS 
                    paintings={paintings} 
                    onDelete={onDeleteArt}
                    onEdit={onEditArt} 
                />

              </article>  
        </>
    );
}

export default ArtPage;
  