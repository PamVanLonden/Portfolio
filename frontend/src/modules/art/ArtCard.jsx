import { TiDelete, TiEdit } from 'react-icons/ti';
// import { Link } from 'react-router-dom';

function ArtCard({ painting, onDelete, onEdit  }) {
    
    return (
    
        <figure>
            <img src={painting.imgurl} alt={painting.title}   />
            <figcaption>
                <i><TiDelete onClick={() => onDelete(painting._id)}  /></i>
                <i><TiEdit   onClick={() => onEdit(painting)}        /></i> 
                {/* <Link to="../edit-art">
                    <i><TiEdit  title="Editing will occur on a new screen, which redirects to the Art Gallery page."/></i> 
                </Link>  */}
                <span><strong>{painting.title}</strong><br /></span>
                <span>{painting.width} x {painting.height} x {painting.depth}-inches, </span>
                <span>{painting.genre}, </span>
                <span>{painting.media}, </span>
                <span>{painting.date.slice(0,10)}, </span>
                <span>{painting.descr }</span>
            </figcaption>
        </figure>
    );
    // title="Editing will occur on a new screen, which redirects to the Art Gallery page."
    // title="Clicking the delete icon will quickly remove the card without confirmation. Are you sure you want to delete?"
}

export default ArtCard;