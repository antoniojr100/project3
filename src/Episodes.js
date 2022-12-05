import App from './App.js';

const Episodes = (props) => {
    
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

export default Episodes;