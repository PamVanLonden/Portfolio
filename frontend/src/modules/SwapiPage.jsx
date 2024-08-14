import React, { useState } from 'react';
import { GiPerson } from 'react-icons/gi';
import { FaUserPlus } from 'react-icons/fa';

function SwapiPage(){
    const [starships, setStarships] = useState([]);

    // fetch may not work; try this method next, or install Axios:
    // https://dev.to/davidbell_xyz/build-with-the-swapi-star-wars-api-react-with-hooks-91e
    const fetchStarships = () => {
        fetch("https://swapi.dev/api/starships/9/")
            .then((response) => response.json())
            .then((response) => {
                setStarships(response.schema);
            })
            .catch(() => {
            alert("Hmmm. The Star Wars API Server seems to be down. Try again later.");
            });
        };
        return (
        <>
        <h2><i><GiPerson /></i>Starships from Star Wars films</h2>
        <article id="staff">
        <p>Star Ships listed below are based on the <cite><a href="https://swapi.dev/" target="_blank" rel="noreferrer">
            Star Wars</a> API</cite>,   
         which provides people, planet, or starship details related to 
         the seven Star Wars films.</p>

        <p>
            <button id="fromServer" onClick={fetchStarships} value="add"><FaUserPlus /> Fetch 10 starships</button> 
        </p>
        
        <table id="staff">
            <caption>Starships from the 7 films</caption>
            <thead>
                <tr>
                <th>Ship</th>
                <th>Class</th>
                <th>Crew</th>
                <th>MGLT</th>
                </tr>
            </thead>

            <tbody>
                {starships.map((schema) => 
                    <tr>
                        <td>{schema.name}</td>
                        <td>{schema.starship_class}</td> 
                        <td>{schema.crew}</td> 
                        <td>{schema.MGLT}</td>
                    </tr>
                    )}

            </tbody>
            </table>
            </article>
            </>
    );
 
}


export default SwapiPage;