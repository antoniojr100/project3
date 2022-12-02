import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import People from "./People.js";
import './App.css';

function App() {

  // const [ path, setPath ] = useState("/people")

  useEffect(() => {
    axios({
      url: "https://swapi.dev/api/films",
      method: "GET",
      dataResponse: "json"
    })
      .then((response) => {
        // console.log(response.data.results)
        const res = response.data.results;
        console.log(res);

        // pfdshfiohcioahc

        const display = res.forEach((movie)=>{
          console.log('==========')
          console.log(`${movie.title} | Episode: ${movie.episode_id}`)
          console.log(`${movie.opening_crawl}`)
        })
        console.log(display)
      })
  },[])


  

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;



// films: "https://swapi.dev/api/films/"
// ​
// people: "https://swapi.dev/api/people/"
// ​
// planets: "https://swapi.dev/api/planets/"
// ​
// species: "https://swapi.dev/api/species/"
// ​
// starships: "https://swapi.dev/api/starships/"
// ​
// vehicles: "https://swapi.dev/api/vehicles/"




// function People(){
    
//   return(
//       <form>
//       <label>Show me stuffs that are:</label>
//       <select 
//           id="searchFor" 
//           name="search"
//           onChange={(e) => {console.log(e.target.value)} }
//       >
//           {
//               console.log()
//           }
//           <option value="" disabled>Pick one:</option>
//           <option value="people">People</option>
//           <option value="films">Films</option>
//           <option value="planets">Planets</option>
//           <option value="species">Species</option>
//           <option value="starships">Starships</option>
//           <option value="vehicles">Vehicles</option>
//       </select>
//       <button type="submit">Give me photos!</button>
//   </form>
//   )
// } 

// export default People;