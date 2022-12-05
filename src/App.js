import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './Header.js';
import './App.css';
// import app from './firebase.js';
// import { getDatabase, ref, onValue } from 'firebase/database';

function App() {

  const [ movies, setMovies] = useState( [] );
  const [ selectedEpisode, setSelectedEpisode ] = useState( '' );

  useEffect(() => {

    fetch(`https://swapi.py4e.com/api/films/`)
      .then( res => res.json() )
      .then ((jsonRes) => {
        const remove7 = jsonRes.results.pop();
        setMovies(jsonRes.results);
      })
  }, []);

  const episodeClick = (e) =>{
    e.preventDefault();

  }

  return (
    <div className="App wrapper">
      <Header />
      
      <main>

        {/* movie list section */}
        <section className="movieList">
          <div className="wrapper">
            {/* Buttons */}
            <ul onClick={(e) => {console.log(e.target.value)}}>
              {
                movies.map((movie) =>{
                  return(
                    <li value={movie.episode_id}>
                      <button value={movie.episode_id} className={movie.episode_id}>
                        {movie.title}
                      </button>
                      {/* <button value={movie.episode_id}>
                        <h3>EPISODE {movie.episode_id}</h3>
                      </button> */}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
        {/* movie list section ends */}

        {/* Selected Movie starts */}
        <section className="selectedEpisode">
          <div className="wrapper">

          </div>
        </section>
        {/* Selected Movie ends */}

      </main>
    </div>
  );
}

export default App;