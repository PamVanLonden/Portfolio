// Import Dependencies
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaRunning } from 'react-icons/fa';


// EDIT function  
export const ArtEditPage = ({ painting }) => {

    const [imgurl, setImgurl] = useState(painting.imgurl);
    const [title,  setTitle]  = useState(painting.title);
    const [width,  setWidth]  = useState(painting.width);
    const [height, setHeight] = useState(painting.height);
    const [depth,  setDepth]  = useState(painting.depth);
    const [genre,  setGenre]  = useState(painting.genre);
    const [media,  setMedia]  = useState(painting.media);
    const [date,    setDate]  = useState(painting.date.slice(0,10));
    const [descr,  setDescr]  = useState(painting.descr);

    const navigate = useNavigate();

    const editArt = async () => {
        
        //remove const?
       const response = await fetch(`/arts/${painting._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                imgurl: imgurl,
                title: title,
                width: width,
                height: height,
                depth: depth,
                genre: genre,
                media: media,
                date: date,
                descr: descr
            }),
            headers: {
                'Content-Type': 'application/json',
            },
       
        });

        if (response.status === 200) {
            alert("You successfully edited that Art card.");
        } else {
            const errMessage = await response.json();
            alert(`That art card update failed due to status ${response.status}. ${errMessage.Error}`);
        }
        navigate("/paintings");
    };

    return (
      <>
          <h2><i><FaRunning /></i>Edit a Painting Card</h2>
          <article>
          <p>Use the icons to update one row of the Art Collection.</p>
          <p>Add today's completed painting from the Google Drive using this prefix: 
            <pre><code>https://drive.google.com/uc?export=view&id=</code></pre>
            or use this path if the file is local:
            <pre><code>/src/modules/art/images/</code></pre>
            </p>
            
          <form onSubmit={(e) => { e.preventDefault();}}>
            <fieldset>
            <legend>Edit a painting</legend>
            <img class="floatright fifty" src={imgurl} alt={title} />
                <label for="url" class="">URL</label> 
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
                        onChange={e => setTitle(e.target.value)} required 
                        /> 

                <label for="width">Width</label>
                <input type="number" 
                        value={width} id="width" name="width" 
                        onChange={e => setWidth(e.target.value)} 
                        />
                <label for="height" >Height</label>
                <input type="number" 
                        value={height} id="height" name="height" 
                        onChange={e => setHeight(e.target.value)} 
                        />
                <label for="depth" >Depth</label>
                <input type="number" 
                        value={depth} id="depth" name="depth" 
                        onChange={e => setDepth(e.target.value)} 
                        />

                <label for="genre" class="required">Genre</label>
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
                
                <label for="artDate" class="required">Date</label>
                    <input type="date" id="artDate" name="artDate" 
                        value={date} 
                        required 
                        onChange={e => setDate(e.target.value)}
                        pattern="\d{2}-\d{2}-\d{2}"
                        /> 

                <label for="artDescr" >Long Description</label>
                        <textarea id="artDescr" name="artDescr" value={descr} 
                            onChange={e => setDescr(e.target.value)}
                        ></textarea>  
            {/* <label for="submit" ></label>         */}
            <button class="wait" onClick={editArt}>Save</button>
            </fieldset>
        </form>
        </article> 
        </>
    );
}
export default ArtEditPage;

