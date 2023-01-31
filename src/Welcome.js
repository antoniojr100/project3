
const Welcome = (props) => {
    const quotes = [`Hello there! - Obi-Wan Kenobi`, `This is the way - Din "The Mandolorian" Djarin`, `I hate sand - Anakin Skywalker`, `Difficulty to see; always in motion is the future - Yoda`, `*coos* - Grogu (Baby Yoda)`, ]; 
    const random = Math.floor(Math.random() * quotes.length) + 1;

    return(
        <div className="wrapper">
            <h2 className="welcomeText">Welcome to the Star Wars Api! Click on a button to see info about the selected movie</h2>
            <p className="welcomeQuote">{quotes[random]}</p>
        </div>
    )
}

export default Welcome;