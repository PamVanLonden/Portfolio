import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const MovieAdd = () => {

    const [title, setTitle]       = useState('');
    const [year, setYear]         = useState('');
    const [language, setLanguage] = useState('');
    
    const redirect = useNavigate();

    const addMovie = async () => {
        const newMovie = { title, year, language };
        const response = await fetch('/movies', {
            method: 'post',
            body: JSON.stringify(newMovie),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`helpful adding message`);
        } else {
            alert(`helpful adding message = ${response.status}`);
        }
        redirect("/moviesPage");
    };


    return (
        <>
            <h2>Add a movie</h2>
            <article>
            <p>Paragraph about this page.</p>
            
            <table id="movies">
                <caption>Which movie are you adding?</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="title">Movie title</label>
                        <input
                            type="text"
                            placeholder="Title of the movie"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label htmlFor="year">Year released</label>
                        <input
                            type="number"
                            value={year}
                            placeholder="Year of the movie"
                            onChange={e => setYear(e.target.value)} 
                            id="year" />
                    </td>

                    <td><label htmlFor="language">Language</label>
                        <input
                            type="text"
                            placeholder="Primary language of the movie"
                            value={language}
                            onChange={e => setLanguage(e.target.value)} 
                            id="language" />
                    </td>

                    <td>
                    <label htmlFor="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addMovie}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default MovieAdd;