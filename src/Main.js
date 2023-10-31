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
    description: `The first of the Star Wars standalone films, "Rogue One: A Star Wars Story", takes place in a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction. This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things and in doing so, become part of something greater than themselves.`,
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
    description: `The second of the Star Wars standalone films, "Solo: A Star Wars Story", shows the most beloved scoundrel in the galaxy go though a series of daring escapades deep within a dark and dangerous criminal underground and meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga's most unlikely heroes.`,
    director: "Ron Howard",
    release_date: "2018-05-23",
    poster: "https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster_f98a86eb_62fc4b3c.jpeg",
    href: "https://www.starwars.com/films/solo",
  }

  
  // Clone Wars
  const movie12 = {
    title: "The Clone Wars",
    episode_id: 12,
    opening_crawl: null,
    description: "The Clone Wars is set during the Star Wars prequel era, taking place over the span of three years (Between Episode 2: Attack of The Clones and Episode 3: Revenge of The Sith). The protagonists comprise returning characters from the films, including Anakin Skywalker, Obi-Wan Kenobi, Padme Amidala, Yoda, Mace Windu, as well as new characters created specifically for the series, such as Anakin's Padawan Ahsoka Tano and clone Captain Rex of the 501st Legion.",
    creator: "Dave Filoni",
    release_date: "2008-10-03",
    poster: "https://lumiere-a.akamaihd.net/v1/images/the-clone-wars-returns-2020-key-art_ef129114.jpeg",
    href: "https://www.starwars.com/series/star-wars-the-clone-wars"
  }

  // Tales of The Jedi
  const movie13 = {
    title: "Tales of The Jedi",
    episode_id: 13,
    opening_crawl: null,
    description: `Each episode of Tales of The Jedi tells a short story featuring Jedi from the Star Wars prequel era. The six episodes featured in the series' first season are split into two "paths": the first following Ahsoka Tano across various points in her life, and the other depicting a young Count Dooku before his fall to the dark side of the Force.`,
    creator: "Dave Filoni",
    release_date: "2022-10-26",
    poster: "https://lumiere-a.akamaihd.net/v1/images/tales-of-the-jedi-poster_dc892101.jpeg",
    href: "https://www.starwars.com/series/tales-of-the-jedi"
  }

  // The Bad Batch
  const movie14 = {
    title: "The Bad Batch",
    episode_id: 14,
    opening_crawl: null,
    description: "Clone Force 99, also known as the Bad Batch - a group of elite clone troopers with genetic mutations that were introduced in Star Wars: The Clone Wars. Unlike the majority if the clone army, these mutations allow the most of the Bad Batch to resist the influence of Order 66, which turned their brethren into brutal and blindly obedient slaves of Emperor Palpatine. In doing so, they become fugitives of the Galactic Empire, relegated to take on daring mercenary missions in the aftermath of the Clone Wars. Meanwhile, Admiral Wilhuff Tarkin begins phasing out the use of clones within the Imperial military in favour of regular humans.",
    creator: "Dave Filoni",
    release_date: "2021-05-04",
    poster: "https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-key-art-s2-poster_119c999d.jpeg",
    href: "https://www.starwars.com/series/star-wars-the-bad-batch"
  }
  
  // Rebels
  const movie15 = {
    title: "Rebels",
    episode_id: 15,
    opening_crawl: null,
    description: "Fourteen years after the fall of both the Galactic Republic and the Jedi Order and the rise of the Galactic Empire, a motley group of rebels called the Spectres unite abroad a light fighter called the Ghost and begin to conduct covert operations against Imperial forces on and around the planet Lothal and on other planets that are menaced by the Empire.",
    creator: "Dave Filoni",
    release_date: "2014-10-03",
    poster: "https://lumiere-a.akamaihd.net/v1/images/star-wars-rebels-season-four-key-art_e7b6d6df.jpeg",
    href: "https://www.starwars.com/series/star-wars-rebels"
  }
  
  // Visions
  const movie16 = {
    title: "Visions",
    episode_id: 16,
    opening_crawl: null,
    description: `Star Wars: Visions is a collection of animated short films presented "through the lenses of the world's best anime creators" in the first volume that offers a new, diverse perspective on Star Wars. Created outside the constraints of the franchise's traditional canon, the films provide creative freedom to each director and production studio, while maintaining fidelity to the themes and emotional identity og the Star Wars saga. Additional volumes feature animation styles from various companies across the world.`,
    creator: "James Waugh",
    release_date: "2021-09-22",
    poster: "https://lumiere-a.akamaihd.net/v1/images/sw-visions-s-2-key-art_2e770676.jpeg",
    href: "https://www.starwars.com/series/star-wars-visions"
  }
  
  // The Mandalorian
  const movie17 = {
    title: "The Mandalorian",
    episode_id: 17,
    opening_crawl: null,
    description: "After the fall of the Empire, a lone Mandalorian makes his way through the lawless galaxy with his foundling, Grogu.",
    creator: "Dave Filoni and Jon Favreau",
    release_date: "2019-10-12",
    poster: "https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-poster-s3-serieslp_aa55f7a4.jpeg",
    href: "https://www.starwars.com/series/the-mandalorian"
  }
  
  // The Book of Boba Fett
  const movie18 = {
    title: "The Book of Boba Fett",
    episode_id: 18,
    opening_crawl: null,
    description: "Mercenaries Boba Fett and Fennec Shand attempt to make a name for themselves in the galaxy's underworld by taking over the controlled territory once controlled by Jabba the Hutt on Tatooine.",
    creator: "Jon Favreau",
    release_date: "2021-12-29",
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_disney_thebookofbobafett_withlogo_20721-1_4032a3ae_8d31afa8.jpeg",
    href: "https://www.starwars.com/series/the-book-of-boba-fett"
  }
  
  
  // Obi-Wan Kenobi
  const movie19 = {
    title: "Obi-Wan Kenobi",
    episode_id: 19,
    opening_crawl: null,
    description: "During the reign of the Empire, Obi-Wan Kenobi embarks on a crucial mission.",
    director: "Deborah Chow",
    release_date: "2022-05-27",
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_starwarsobiwankenobi_v2_20649_ebb5549e.jpeg",
    href: "https://www.starwars.com/series/obi-wan-kenobi"
  }
  
  
  // Andor
  const movie20 = {
    title: "Andor",
    episode_id: 20,
    opening_crawl: null,
    description: "Five years after the events of Rogue One and A New Hope, the series follows an ensemble cast of characters during tje time that a Rebel Alliance is forming in opposition to the Galactic Empire. One of these characters, Cassian Andor, embarks on a path destined to turn him into a rebel hero.",
    creator: "Tony Gilroy",
    release_date: "2022-09-21",
    poster: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_andor_v1_569_e2e1b900.jpeg",
    href: "https://www.starwars.com/series/andor"
  }
  
  
  // Ahsoka
  const movie21 = {
    title: "Ahsoka",
    episode_id: 21,
    opening_crawl: null,
    description: `Set after the fall of the Empire, "Ahsoka" follows the former Jedi Knight Ahsoka Tano as she investigates an emerging threat to a vulnerable galaxy.`,
    creator: "Dave Filoni",
    release_date: "2023-08-22",
    poster: "https://lumiere-a.akamaihd.net/v1/images/ahsoka-payoff-vertical-nodate_a20eda2a.jpeg",
    href: "https://www.starwars.com/series/star-wars-ahsoka"
  }



  if(movies.length < 9){
    movies.push(movie8, movie9, movie10, movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, movie19, movie20, movie21);
  }
  console.log(movies);


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
    const movie9 = movies[8];

    // Rogue One
    const movie10 = movies[9];

    // Solo
    const movie11 = movies[10];

    // The Clone Wars
    const movie12 = movies[11];

    // Tales of The Jedi
    const movie13 = movies[12];
    
    // Bad Batch
    const movie14 = movies[13];
    
    // Rebels
    const movie15 = movies[14];
    
    // Visions
    const movie16 = movies[15];

    // Mando
    const movie17 = movies[16];
    
    // Boba Fett
    const movie18 = movies[17];

    // Obi-Wan
    const movie19 = movies[18];

    // Andor
    const movie20 = movies[19];

    // Ahsoka
    const movie21 = movies[20];


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

    else if(e.target.value === '12'){
      setMovieObj(movie12);
      setPoster(movie12.poster);
      setMovieHref(movie12.href);
    }

    // TALES OF THE JEDI
    else if(e.target.value === '13'){
      setMovieObj(movie13);
      setPoster(movie13.poster);
      setMovieHref(movie13.href);
    }

    // BAD BATCH
    else if(e.target.value === '14'){
      setMovieObj(movie14);
      setPoster(movie14.poster);
      setMovieHref(movie14.href);
    }

    // REBELS
    else if(e.target.value === '15'){
      setMovieObj(movie15);
      setPoster(movie15.poster);
      setMovieHref(movie15.href);
    }

    // VISIONS
    else if(e.target.value === '16'){
      setMovieObj(movie16);
      setPoster(movie16.poster);
      setMovieHref(movie16.href);
    }

    // MANDO
    else if(e.target.value === '17'){
      setMovieObj(movie17);
      setPoster(movie17.poster);
      setMovieHref(movie17.href);
    }

    // BOBA FETT
    else if(e.target.value === '18'){
      setMovieObj(movie18);
      setPoster(movie18.poster);
      setMovieHref(movie18.href);
    }

    // OBI-WAN
    else if(e.target.value === '19'){
      setMovieObj(movie19);
      setPoster(movie19.poster);
      setMovieHref(movie19.href);
    }

    // ANDOR
    else if(e.target.value === '20'){
      setMovieObj(movie20);
      setPoster(movie20.poster);
      setMovieHref(movie20.href);
    }

    // AHSOKA
    else if(e.target.value === '21'){
      setMovieObj(movie21);
      setPoster(movie21.poster);
      setMovieHref(movie21.href);
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
            {/* checks if movieObj is a movie (episodes 1-9) or a show  */}
            {movieObj.episode_id < 10 ? <h2 id="episodeNumber">Episode: {selectedEpisode} </h2> : <p></p>}

            {/* Display movie/Show title and release date */}
            <h2 id="title">{movieObj.title}</h2>
            {movieObj.release_date ? <h4 id="releaseDate">Released: {movieObj.release_date}</h4> : <p id="noReleaseDate"></p>}
            
            {/* Display director or creator */}
            {movieObj.director ? <h3 class="directorCreator">Directed by: {movieObj.director}</h3> : <p></p>}
            {movieObj.creator ? <h3 class="directorCreator">Created by: {movieObj.creator}</h3>: <p></p>}
            
            {/* Display poster */}
            <div className="posterContainer">
              <a href={movieHref} target="_blank" rel="noreferrer">
                {poster ? <img src={poster} alt={`poster for ${movieObj.title}`}/> : <p></p>}
              </a>
            </div>
            
            {/* Display Opening crawl or description */}
            {movieObj.opening_crawl ? <h3 className="premiseTitle">Opening Crawl:</h3> : <p></p>}
            {movieObj.description ? <h3 className="premiseTitle">Description:</h3> : <p></p>}

            {movieObj.opening_crawl ? <p className="premiseText">{movieObj.opening_crawl}</p> : <p></p>}
            {movieObj.description ? <p className="premiseText">{movieObj.description}</p> : <p></p>}
          </div>
        </section>
      </section>
    </main>
  )

}

export default Main;