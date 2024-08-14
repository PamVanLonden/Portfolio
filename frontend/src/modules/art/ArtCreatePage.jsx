import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaRunning } from 'react-icons/fa';

export const CreatePage = () => {
    const [imgurl, setImgurl]   = useState();
    const [title,  setTitle]    = useState();
    const [width,  setWidth]    = useState();
    const [height, setHeight]   = useState();
    const [depth,  setDepth]    = useState('.1');
    const [genre,  setGenre]    = useState('landscape');
    const [media,  setMedia]    = useState('oil');
    const [date,   setDate]     = useState();
    const [descr,  setDescr]    = useState();

    const navigate = useNavigate();

    const addArt = async (event) => {
        event.preventDefault();

        const newArt = { 
            imgurl, 
            title, 
            width, 
            height, 
            depth, 
            genre, 
            media, 
            date,
            descr };
        
        try {
            const response = await fetch('/arts', {
                method: 'POST',
                body: JSON.stringify(newArt),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            if(response.status === 201){
                alert("Successfully added a painting to a card in the log.");
                navigate("/paintings");
            } else {
                alert(`Failed to add a card, due to status code = ${response.status}.`);
            }
        
        } catch {
            alert(`Failed to add a card, due to status code = ${response.status}.`);
        }
            
      };
  
       return (
        <>
            <h2><i><FaRunning /></i>Log a Painting.</h2>
            <article>
            <p>Add today's completed painting from the Google Drive using this prefix: 
            <pre><code>https://drive.google.com/uc?export=view&id=</code></pre>
            or use this path if the file is local:
            <pre><code>/src/modules/art/images/</code></pre>
            </p>
            <form id="artlog" onSubmit={addArt}>
                <fieldset class="floatleft fifty">
                <legend>Add a painting</legend>
                    <label for="url" class="">URL </label> 
                    <textarea class="url"
                        value={imgurl} 
                        id="url" 
                        name="url" 
                        onChange={e => setImgurl(e.target.value)} 
                        autoFocus
                        maxLength="100"
                ></textarea> 
                   
                        
                    <label for="title" class="required">Title</label> 
                    <input type="text" 
                            value={title} 
                            id="title" 
                            name="title" 
                            required
                            onChange={e => setTitle(e.target.value)}  
                            /> 
                    <label for="width" class="required">Width</label> 
                    <input type="number" 
                            value={width} id="width" name="width" 
                            onChange={e => setWidth(e.target.value)}
                            required  
                            />
                    <label for="height"  class="required" >Height</label> 
                    <input type="number" 
                            value={height} id="height" name="height" 
                            onChange={e => setHeight(e.target.value)} 
                            required />
                    <label for="depth" >Depth</label> 
                    <input type="number" 
                            value={depth} id="depth" name="depth" 
                            onChange={e => setDepth(e.target.value)} 
                            />
                    
                </fieldset>
                <fieldset>
                <legend>Describe it</legend>
                    <label for="genre" class="required">Genre </label>
                    <select 
                        name='genre' 
                        value={genre} 
                        onChange={e => setGenre(e.target.value)} 
                        required
                        >
                        <option value="landscape" selected>Landscape</option>
                        <option value="seascape">Seascape</option>
                        <option value="figure">Figure</option>
                        <option value="interior">Interior</option>
                        <option value="cityscape">Cityscape</option>
                    </select>

                    <label for="media" class="required">Media</label> 
                    <select 
                        name='media' id="media"
                        value={media} 
                        onChange={e => setMedia(e.target.value)} 
                        required
                        >
                        <option value="watercolor" selected>Watercolor</option>
                        <option value="oil">Oil</option>
                        <option value="acrylic">Acrylic</option>
                        <option value="fiber">Fiber</option>
                        <option value="clay">Clay</option>
                        <option value="mixed">Mixed</option>
                    </select>
                    
                    <label for="artDate" class="required">Date Completed</label>
                        <input type="date" id="artDate" name="artDate" value={date} 
                            required 
                            onChange={e => setDate(e.target.value)}
                            pattern="\d{2}-\d{2}-\d{2}"
                            />
                   <label for="artDescr" >Long Description</label>
                        <textarea id="artDescr" name="artDescr" value={descr} 
                            onChange={e => setDescr(e.target.value)}
                        ></textarea>     
                <button class="wait">Save</button>
                <p className="clear"></p>
                </fieldset>
                <p className="clear"></p>
            </form>
            </article>
        </>
    );
}

export default CreatePage;
