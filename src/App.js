import { useState, useEffect } from 'react';
import Header from './Header.js';
import './App.css';
// import app from './firebase.js';
// import { getDatabase, ref, onValue } from 'firebase/database';

function App() {

  const [ movies, setMovies] = useState( [] );
  const [ selectedEpisode, setSelectedEpisode ] = useState( '' );
  const [ movieObj, setMovieObj ] = useState( {} );

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
    if(e.target.value !== '0' && e.target.value !== ''){
      setSelectedEpisode(e.target.value);
      settingUpMovie(selectedEpisode);
    }
  }

  const settingUpMovie = (num) => {
    const movie1 = movies[3]
    const movie2 = movies[4]
    const movie3 = movies[5]
    const movie4 = movies[0]
    const movie5 = movies[1]
    const movie6 = movies[2]

    if(num === '1'){
      setMovieObj(movie1)
      console.log(movieObj)
    }
    else if(num === '2'){
      setMovieObj(movie2)
      console.log(movieObj)
    }
    else if(num === '3'){
      setMovieObj(movie3)
      console.log(movieObj)
    }
    else if(num === '4'){
      setMovieObj(movie4)
      console.log(movieObj)
    }
    else if(num === '5'){
      setMovieObj(movie5)
      console.log(movieObj)
    }
    else if(num === '6'){
      setMovieObj(movie6)
      console.log(movieObj)
    }
  }


  return (
    <div className="App wrapper">
      <Header />
      
      <main>

        {/* movie list section */}
        <section className="movieList">
          <div className="wrapper buttonsContainer">
            {/* Buttons */}
              {
                movies.map((movie) =>{
                  return(
                    <button 
                      value={movie.episode_id}
                      onClick={episodeClick}
                      >
                        {/* <button 
                          value={movie.episode_id}
                          onClick={episodeClick}
                          > */}
                            Episode {movie.episode_id} | {movie.title}
                        {/* </button> */}
                    </button>
                  )
                })
              }
          </div>
        </section>
        {/* movie list section ends */}

        {/* Selected Movie starts */}
        <section className="selectedEpisode">
          <div className="wrapper">
              <p>{selectedEpisode}</p>
              
                  <div className="displayedMovie">
                    <h2 className="displayedMovie">{movieObj.title}</h2>
                    <h3>{movieObj.release_date}</h3>
                    <p className="displayedMovie">{movieObj.opening_crawl}</p>
                  </div>
          </div>
        </section>
        {/* Selected Movie ends */}

      </main>
    </div>
  );
}

export default App;