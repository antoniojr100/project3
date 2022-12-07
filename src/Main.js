import { useState, useEffect } from 'react';

const Main = () => {
  
  const [ movies, setMovies] = useState( [] );
  const [ selectedEpisode, setSelectedEpisode ] = useState( '' );
  const [ movieObj, setMovieObj ] = useState( {} );
  const [ poster, setPoster] = useState( '' );
  const [ movieHref, setMovieHref ] = useState( '' );

  useEffect(() => {

    fetch(`https://swapi.py4e.com/api/films/`)
      .then( res => res.json() )
      .then ((jsonRes) => {
        setMovies(jsonRes.results);
      })
  }, []);

  const episodeClick = (e) =>{
    e.preventDefault();
    if(e.target.value !== '0' && e.target.value !== ''){
      setSelectedEpisode(e.target.value);
    }

    const movie1 = movies[3];
    const movie2 = movies[4];
    const movie3 = movies[5];
    const movie4 = movies[0];
    const movie5 = movies[1];
    const movie6 = movies[2];
    const movie7 = movies[6];

    if(e.target.value === '1'){
      setMovieObj(movie1);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg?region=15%2C9%2C651%2C979&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-i-the-phantom-menace');
    }
    else if(e.target.value === '2'){
      setMovieObj(movie2);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=18%2C0%2C660%2C1000&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-ii-attack-of-the-clones');
    }
    else if(e.target.value === '3'){
      setMovieObj(movie3);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C0%2C736%2C1090&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-iii-revenge-of-the-sith');
    }
    else if(e.target.value === '4'){
      setMovieObj(movie4);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-iv-a-new-hope');
    }
    else if(e.target.value === '5'){
      setMovieObj(movie5);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=25%2C22%2C612%2C953&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back');
    }
    else if(e.target.value === '6'){
      setMovieObj(movie6);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=12%2C9%2C618%2C982&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi');
    }
    else if(e.target.value === '7'){
      setMovieObj(movie7);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens');
    }

  }

  return(
    <main>
      <section className="movieList">
        <div className="wrapper buttonsContainer">
          {/* Buttons */}
          {
            movies.map((movie) =>{
              return(
                <button 
                  key={movie.title}
                  value={movie.episode_id}
                  onClick={episodeClick}
                >
                  Episode {movie.episode_id} | {movie.title}
                </button>
              )
            })
          }
        </div>
        <section className="selectedEpisode">
          <div className="wrapper movieSection">
            {/* movie info */}
            {/* checks if movieObj is empty  */}
            {movieObj.episode_id ? <h2>Episode: {selectedEpisode} </h2> : <p></p>}
            <h2>{movieObj.title}</h2>
            <h3>{movieObj.release_date}</h3>
            {movieObj.episode_id ? <h3>Directed by: {movieObj.director}</h3> : <p></p>}
            <div className="posterContainer">
              <a href={movieHref} target="_blank" rel="noreferrer">
                {movieObj.episode_id ? <img src={poster} alt={`poster for ${movieObj.title}`}/> : <p></p>}
              </a>
            </div>
            {movieObj.episode_id ? <h3 className="openingCrawlText">Opening Crawl:</h3> : <p></p>}
            <p className="openingCrawl">{movieObj.opening_crawl}</p>
          </div>
        </section>
      </section>
    </main>
  )

}

export default Main;