import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import HomePage from './modules/HomePage.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import GalleryPage from './modules/GalleryPage-extra.jsx';
//import GalleryPage from './modules/GalleryPage.jsx';
import OrderPage from './modules/order/OrderPage.jsx';

// import ContactPage from './modules/ContactPage.jsx';
import StaffPage from './modules/StaffPage.jsx';

import MoviesPage from './modules/movies/MoviesPage.jsx';
import MovieAdd from './modules/movies/MovieAdd.jsx';
import MovieEdit from './modules/movies/MovieEdit.jsx';

import RetrieveExercises from './modules/exercises/RetrieveExercises.jsx';
import CreateExercise from './modules/exercises/CreateExercise.jsx';
import UpdateExercise from './modules/exercises/UpdateExercise.jsx';

import ArtPage from './modules/art/ArtPage.jsx';
import ArtCreatePage from './modules/art/ArtCreatePage.jsx';
import ArtEditPage from './modules/art/ArtEditPage.jsx';

import Navigation from './modules/Navigation.jsx';
import Slogan from './modules/Slogan.jsx';
import { FaPaintBrush } from "react-icons/fa";

import products from './data/products.js';

// import Counter from './modules/Counter.jsx';

function App() {
  const [movie, setMovie] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [painting, setPainting] = useState([]);

  return (
    <div>
        <header>
          <h1>Pam <i><FaPaintBrush /></i> Van Londen</h1>
          <Slogan />
        </header>
        
        <Router>
        <Navigation />
          <main>
              <section>
              
                  <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/topics"  element={<TopicsPage />}></Route>
                    <Route path="/gallery" element={<GalleryPage />}> </Route>
                    <Route path="/pets"   element={<OrderPage  />}></Route>
                    {/* <Route path="/counter"   element={<Counter />}></Route> */}

                    {/* <Route path="/contact" element={<ContactPage />}> </Route> */}
                    <Route path="/staff"   element={<StaffPage />}>   </Route> 
                   
                    <Route path="/moviesPage" element={<MoviesPage setMovie={setMovie}/>}></Route>
                    <Route path="/create" element={<MovieAdd />} /> 
                    <Route path="/update" element={<MovieEdit movieToEdit={movie} />} />

                    <Route path="/exercises" element={<RetrieveExercises setExercise={setExercise} />} /> 
                    <Route path="/createExercise" element={<CreateExercise />} /> 
                    <Route path="/updateExercise" element={<UpdateExercise exercise={exercise} />} /> 

                    <Route path="/paintings" element={<ArtPage setPainting={setPainting}/>}></Route>
                    <Route path="/createPainting" element={<ArtCreatePage />} /> 
                    <Route path="/updatePainting" element={<ArtEditPage painting={painting} />} />
                 
                  </Routes>
                
              </section>
          </main>
        </Router>

        <footer>
          <p>&copy; {new Date().getFullYear()} Pam Van Londen</p>
        </footer>

    </div>
  );
}

export default App;
