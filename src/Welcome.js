
const Welcome = (props) => {
    const quotes = [
    `Hello there! - Obi-Wan Kenobi`, 
    `This is the way - Din "The Mandolorian" Djarin`, 
    `I hate sand - Anakin Skywalker`, 
    `Difficulty to see; always in motion is the future - Yoda`, 
    `Do. Or do not. There is no try. - Yoda`,
    `Your focus determines your reality. - Qui-Gon Jinn`,
    `Never tell me the odds - Han Solo`,
    `I like firsts. Good or bad, they're always memorable - Ahsoka Tano`,
    `In my experience, there's no such thing as luck - Obi-Wan Kenobi`,
    `In my book, experience outsranks everything - Captain Rex`,
    `I am a Jedi, like my father before me - Luke Skywalker `,
    // obi-wan(2), qui-gon(1), yoda(2), ani(1), luke(1), mando(1), han(1), ahsoka(1), rex(1)
    ]; 
    const random = Math.floor(Math.random() * quotes.length) + 1;

    return(
        <div className="wrapper">
            <h2 className="welcomeText">Welcome to the Star Wars Api! Click on a button to see info about the selected movie</h2>
            <p className="welcomeQuote">{quotes[random]}</p>
        </div>
    )
}

export default Welcome;