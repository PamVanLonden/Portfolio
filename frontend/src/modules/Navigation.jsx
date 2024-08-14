import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/pets">Order</Link>
            {/* <Link to="/starwars">Star Wars</Link> */}
            <Link to="/staff">Staff</Link>
            <Link to="/moviePage">Movies</Link>
            <Link to="/exercisePage">Exercises</Link>
            <Link to="/paintings">Art Cards</Link>
            <Link to="/paintingsDS">Art Details</Link>
            <Link to="/contactPage">Contact Me</Link>

            
            {/* <Link to="/counter">Counter</Link> */}
            {/* <Link to="/contact">Contact</Link> */}
            
        </nav>
        </>
    );
}
export default Navigation;

