import {useState} from 'react';

import AddMovies from '../components/Movies/AddMovie/AddMovie';

const Movies = () => {

    const [movies, setMovies] = useState([]);

    const updateMovies = (movie) => {
        setMovies([...movies, movie])
    }

    return (
        <div className="banner">
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h2 style={{color: 'white'}}>Add Movies</h2>

                <ul>
                    {
                        movies.map(data => {
                            return <li style={{color: 'white'}}>{data.title}</li>
                        })
                    }
                </ul>
            

                <AddMovies
                    updateMovies={updateMovies}
                />

            </div>
        </div>
    )
}

export default Movies;