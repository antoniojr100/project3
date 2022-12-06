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
        jsonRes.results.pop();
        setMovies(jsonRes.results);
      })
  }, []);

  const episodeClick = (e) =>{
    e.preventDefault();
    if(e.target.value !== 0){
      setSelectedEpisode(e.target.value);
      console.log(selectedEpisode)
      settingUpMovie()
    }
  }

  const settingUpMovie = () => {
    if(selectedEpisode === 1){
      console.log(movies[3])
    }
    // Episode 2 = movies[4]
    if(selectedEpisode === 2){
      console.log(movies[4])
    }
    // Episode 3 = movies[5]
    if(selectedEpisode === 3){
      console.log(movies[5])
    }
    // Episode 4 = movies[0]
    if(selectedEpisode === 4){
      console.log(movies[0])
    }
    // Episode 5 = movies[1]
    if(selectedEpisode === 5){
      console.log(movies[1])
    }
    // Episode 6 = movies[2]
    if(selectedEpisode === 6){
      console.log(movies[2])
    }
  }

  return (
    <div className="App wrapper">
      <Header />
      
      <main>

        {/* movie list section */}
        <section className="movieList">
          <div className="wrapper">
            {/* Buttons */}
            <ul>
              {
                movies.map((movie) =>{
                  return(
                    <li 
                      value={movie.episode_id}
                      onClick={episodeClick}
                      >
                        {/* <button 
                          value={movie.episode_id}
                          onClick={episodeClick}
                          > */}
                            Episode {movie.episode_id} | {movie.title}
                        {/* </button> */}
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
              <p>{selectedEpisode}</p>
              {
                // revenge of the sith
                // console.log(movies[5])
              }
          </div>
        </section>
        {/* Selected Movie ends */}

      </main>
    </div>
  );
}

export default App;