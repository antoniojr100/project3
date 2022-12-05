import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
// import app from './firebase.js';
// import { getDatabase, ref, onValue } from 'firebase/database';

function App() {

  // const [ movies, setMovies ] = useState( [] )

  //   useEffect(() => {
  //     axios({
  //       url: "https://swapi.py4e.com/api/films/",
  //       method: "GET",
  //       dataResponse: "json"
  //     })
  //       .then((response) => {
  //         // console.log(response.data.results)
  //         const res = response.data.results;
  //         // console.log(res);


  //         // const display = res.forEach((movie)=>{
  //         //   if(movie.episode_id <= 6){
  //         //     console.log('==========')
  //         //     console.log(`${movie.title} | Episode: ${movie.episode_id}`)
  //         //     console.log(`${movie.opening_crawl}`)
  //         //   }
  //         // })
  //         // display();

  //         const oneToSix = res.filter((movieObj) =>{
  //           if(movieObj.episode_id <= 6){
  //             return movieObj;
  //           } else {
              
  //           }
  //         })
          
  //         // displays 6 to console
  //         console.log(oneToSix);
  //         // setMovies(oneToSix);
  //   },[])
  // })

  const [ movies, setMovies] = useState( [] );
  const [ loading, setLoading ] = useState( [] );

  useEffect(() => {

    fetch(`https://swapi.py4e.com/api/films/`)
      .then( res => res.json() )
      .then ((jsonRes) => {
        setMovies(jsonRes.results)
        // console.log(jsonRes.results)
      })
  }, []);

  return (
    <div className="App wrapper">
      <h1>Star Wars API</h1>
      
      
      {/* movie list section */}
      <section className="movieList">
          <ul>
            {
              movies.map((movie) =>{
                return(
                  <li>
                    <button>
                      <h3>EPISODE {movie.episode_id}</h3>
                    </button>
                  </li>
                )
              })
            }
          </ul>
      </section>
      {/* movie list section ends */}

    </div>
  );
}

export default App;