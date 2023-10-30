import { useState, useEffect } from 'react';
import Welcome from './Welcome.js';

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

  // The Last Jedi
  const movie8 = {
    title: "The Last Jedi",
    episode_id: 8,
    opening_crawl: "The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy. Only General Leia Organa's band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight. But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....",
    director: "Rian Johnson",
    release_date: "2018-12-17",
    poster: "https://lumiere-a.akamaihd.net/v1/images/sb_teaser2_1-sht_v3a_online_lg_86f89198.jpeg",
    href: "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  }

  // Rise of Skywalker
  const movie9 = {
    title: "The Rise of Skywalker",
    episode_id: 9,
    opening_crawl: "The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE. GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER. Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power....",
    director: "JJ Abrams",
    release_date: "2019-12-18",
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_starwarstheriseofskywalker_18508_3840c966.jpeg",
    href: "https://www.starwars.com/films/star-wars-episode-ix-the-rise-of-skywalker",
  }

  // Rogue One
  const movie10 = {
    title: "Rogue One",
    episode_id: 10,
    opening_crawl: null,
    director: "Gareth Edwards",
    release_date: "2016-12-16",
    poster: "https://lumiere-a.akamaihd.net/v1/images/5adfd0618fdfb900016b5ca6-image_64bc2f8e.jpeg",
    href: "https://www.starwars.com/films/rogue-one",
  }
  
  // Solo
  const movie11 = {
    title: "Solo",
    episode_id: 11,
    opening_crawl: null,
    director: "Ron Howard",
    release_date: "2018-05-23",
    poster: "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster_f98a86eb_62fc4b3c.jpeg",
    href: "https://www.starwars.com/films/solo",
  }


  if(movies.length < 9){
    movies.push(movie8, movie9, movie10, movie11)
  }
  console.log(movies)


  const episodeClick = (e) =>{
    e.preventDefault();


    if(e.target.value !== '0' && e.target.value !== ''){
      setSelectedEpisode(e.target.value);
    }

    // Phantom Menace
    const movie1 = movies[3];
    
    // Attack of The Clones
    const movie2 = movies[4];
    
    // Revenge of The Sith 🐐
    const movie3 = movies[5];
    
    // A New Hope
    const movie4 = movies[0];
    
    // Empire Strikes Back
    const movie5 = movies[1];
    
    // Return of The Jedi
    const movie6 = movies[2];
    
    // The Force Awakens
    const movie7 = movies[6];

    // The Last Jedi
    const movie8 = movies[7];
    

    // The Rise of Skywalker
    const movie9 = movies[8]

    // Rogue One
    const movie10 = movies[9]

    const movie11 = movies[10]



    // Phantom Menace
    if(e.target.value === '1'){
      setMovieObj(movie1);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg?region=15%2C9%2C651%2C979&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-i-the-phantom-menace');
    }

    // Attack of The Clones
    else if(e.target.value === '2'){
      setMovieObj(movie2);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=18%2C0%2C660%2C1000&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-ii-attack-of-the-clones');
    }

    // Revenge of The Sith 🐐
    else if(e.target.value === '3'){
      setMovieObj(movie3);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C0%2C736%2C1090&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-iii-revenge-of-the-sith');
    }

    // A New Hope
    else if(e.target.value === '4'){
      setMovieObj(movie4);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-iv-a-new-hope');
    }

    // Empire Strikes Back
    else if(e.target.value === '5'){
      setMovieObj(movie5);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=25%2C22%2C612%2C953&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back');
    }

    // Return of The Jedi
    else if(e.target.value === '6'){
      setMovieObj(movie6);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=12%2C9%2C618%2C982&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi');
    }

    // The Force Awakens
    else if(e.target.value === '7'){
      setMovieObj(movie7);
      setPoster('https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=480');
      setMovieHref('https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens');
    }

    else if(e.target.value === '8'){
      setMovieObj(movie8);
      setPoster(movie8.poster);
      setMovieHref(movie8.href);
    }

    else if(e.target.value === '9'){
      setMovieObj(movie9);
      setPoster(movie9.poster);
      setMovieHref(movie9.href);
    }

    else if(e.target.value === '10'){
      setMovieObj(movie10);
      setPoster(movie10.poster);
      setMovieHref(movie10.href);
    }

    else if(e.target.value === '11'){
      setMovieObj(movie11);
      setPoster(movie11.poster);
      setMovieHref(movie11.href);
    }
  }

  return(
    <main>
      <section className="welcome">
        {/* displays Welcome component if user has not selected a movie */}
        { !movieObj.episode_id ? <Welcome /> : <p></p>}
      </section>
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
                  {movie.title}
                </button>
              )
            })
          }
        </div>
        <section className="selectedEpisode">
          <div className="wrapper movieSection">
            {/* movie info */}
            {/* checks if movieObj is empty  */}
            {movieObj ? <h2>Episode: {selectedEpisode} </h2> : <p></p>}

            <h2>{movieObj.title}</h2>
            <h3>{movieObj.release_date}</h3>
            
            {movieObj ? <h3>Directed by: {movieObj.director}</h3> : <h3>Directed by: {movieObj.director}</h3>}
            
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