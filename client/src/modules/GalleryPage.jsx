import tessellation from '../assets/turtle-tessellation.png'
import temperatures from '../assets/matplotlib-temps.png'
import drinks       from '../assets/python-drinks-shop.png'
import weather      from '../assets/turtle-benton-weather.png'
import timetasks    from '../assets/python-time-tasks.png'

function GalleryPage(){
    const images = [tessellation, temperatures, drinks, weather, timetasks];
    

    return (
        <>
        <h2>Gallery</h2>
        <p>These projects have been used in multiple Computer Science courses. 
            And some are just for fun. 
        </p>
    
            <article className="gallery">
                { 
                  images.map((image) => 
                    <figure>
                        <img src={image} alt="" title="" />
                        {/* <figcaption></figcaption> */}
                    </figure>
                    )
                }
            </article> 
        </>
    )
}
    
export default GalleryPage;