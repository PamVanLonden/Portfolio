import ArtCardDS from './ArtCardDS.jsx';

function ArtGalleryDS({ paintings, onDelete, onEdit  }) {
    return (
        <div className="gallery">
                {paintings.map((painting, i) => 
                    <ArtCardDS 
                        painting={painting} 
                        key={i} 
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />
                )}
        </div>
    );
}

export default ArtGalleryDS;
