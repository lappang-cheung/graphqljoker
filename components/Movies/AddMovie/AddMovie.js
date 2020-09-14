import { useState } from 'react';

const AddMovies = ({ updateMovies }) => {

    const initialInputState = {
        title: "",
        quote: "",
        line: "",
        trailer: "",
        poster: "",
        background: ""
    }
    const [movie, setMovie] = useState(initialInputState);
    const { title, quote, line, trailer, poster, background } = movie;

    const handleInputChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value})
        // console.log(movie)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovies(movie)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label style={{color: 'white'}}>Title</label>
            <input 
                type="text" 
                name="title" 
                id="movie_title" 
                value={title}
                onChange={handleInputChange}
            />
            <br/>
            <label style={{color: 'white'}}>Quote</label>
            <input 
                type="text" 
                name="quote" 
                id="movie_quote"
                value={quote}
                onChange={handleInputChange}
            />
            <br/>
            <label style={{color: 'white'}}>Line</label>
            <input 
                type="text" 
                name="line" 
                id="movie_line"
                value={line}
                onChange={handleInputChange}
            />
            <br/>
            <label style={{color: 'white'}}>Trailer</label>
            <input 
                type="text" 
                name="trailer" 
                id="movie_trailer"
                value={trailer}
                onChange={handleInputChange}
            />
            <br/>
            <label style={{color: 'white'}}>Poster</label>
            <input 
                type="file" 
                name="poster" 
                id="movie_trailer"
                value={poster}
                onChange={handleInputChange}
            />
            <br/>
            <label style={{color: 'white'}}>Poster Background</label>
            <input 
                type="file" 
                name="background" 
                id="movie_background"
                value={background}
                onChange={handleInputChange}
            />
            <br/>
            <button>Submit</button>
            <button>Cancel</button>
        </form>
    )
}

export default AddMovies;