// import tessellation from '../assets/turtle-tessellation.png'
// import temperatures from '../assets/matplotlib-temps.png'
// import drinks       from '../assets/python-drinks-shop.png'
// import weather      from '../assets/turtle-benton-weather.png'
// import timetasks    from '../assets/python-time-tasks.png'

import { GrGallery } from "react-icons/gr";

// image filepath for vite+react deployed on netlify
// still trying to get it correct. These don't work:
// ./src, /src, ../src, /assets, ../assets
const images = [
    {
        filepath: '/src/assets/turtle-tessellation.png',
        caption: 'Tessellation made with Python Turtle.',
        title: "&copy; 2022 Van Londen"
    },
    {
        filepath: '/src/assets/matplotlib-temps.png',
        caption: 'Chart of temperatures made with MatPlotLib and Python.',
        title: `&copy; 2022 Van Londen` 
    },
    {
        filepath: '/src/assets/python-drinks-shop.png',
        caption: 'Output from a Python program that takes a drink order.',
        title: `&copy; 2022 Van Londen` 
    },
    {
        filepath: '/src/assets/turtle-benton-weather.png',
        caption: 'Benton County temperatures charted with Python Turtle.',
        title: `&copy; 2022 Van Londen`  
    },
    {
        filepath: '/src/assets/python-time-tasks.png',
        caption: 'Time spent on tasks programmed with Python.',
        title: `&copy; 2022 Van Londen` 
    }
];

function GalleryPage(){
    // const images = [tessellation, temperatures, drinks, weather, timetasks];
    

    return (
        <>
        <h2><i><GrGallery /></i> Gallery</h2>
        <p>These projects have been used in multiple Computer Science courses. 
            And some are just for fun. 
        </p>
    
            <article className="card gallery">
                { 
                  images.map((image) => 
                    <figure>
                        <img src={image.filepath} alt={image.caption} title={image.title} />
                        <figcaption>{image.caption}</figcaption>
                    </figure>
                    )
                }
            </article> 
        </>
    )
}
    
export default GalleryPage;