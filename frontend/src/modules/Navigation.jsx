import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/pets">Order</Link>
            <Link to="/staff">Staff</Link>
            <Link to="/paintings">Art</Link>
            {/*             
            <Link to="/moviesPage">Movies</Link>
            <Link to="/exercises">Exercises</Link> 
            */}
        
            {/* <Link to="/counter">Counter</Link> */}
            {/* <Link to="/contact">Contact</Link> */}
            
        </nav>
        </>
    );
}
export default Navigation;

