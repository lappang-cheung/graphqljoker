const AddMovies = () => {
    return(
        <form>
            <label style={{color: 'white'}}>Title</label>
            <input type="text" name="title" id="movie_title"/>
            <br/>
            <label style={{color: 'white'}}>Quote</label>
            <input type="text" name="quote" id="movie_quote"/>
            <br/>
            <label style={{color: 'white'}}>Line</label>
            <input type="text" name="line" id="movie_line"/>
            <br/>
            <label style={{color: 'white'}}>Trailer</label>
            <input type="text" name="trailer" id="movie_trailer"/>
            <br/>
            <label style={{color: 'white'}}>Poster</label>
            <input type="file" name="poster" id="movie_trailer"/>
            <br/>
            <label style={{color: 'white'}}>Poster Background</label>
            <input type="file" name="background" id="movie_background"/>
            <br/>
            <button>Submit</button>
            <button>Cancel</button>
        </form>
    )
}

export default AddMovies;