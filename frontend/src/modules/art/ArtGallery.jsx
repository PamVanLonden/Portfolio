import ArtCard from './ArtCard.jsx';

function ArtGallery({ paintings, onDelete, onEdit  }) {
    return (
        <div className="card">
                {paintings.map((painting, i) => 
                    <ArtCard 
                        painting={painting} 
                        key={i} 
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />
                )}
        </div>
    );
}

export default ArtGallery;
