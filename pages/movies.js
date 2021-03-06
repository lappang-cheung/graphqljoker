import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';

const GET_MOVIES = gql`
    query getMovies {
        movies {
            _id
            title
            line
            trailer
            quote
        }
    }
`;

import AddMovies from '../components/Movies/AddMovie/AddMovie';

const Movies = () => {

    const { data, loading } = useQuery(GET_MOVIES);

    if(loading) return <section />

    const { movies } = data;

    return (
        <div className="banner">
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h2 style={{color: 'white'}}>Add Movies</h2>

                <ul>
                    {
                        movies.map(movie => {
                            return <li style={{color: 'white'}} key={movie._id}>{movie.title}</li>
                        })
                    }
                </ul>
            

                <AddMovies />

            </div>
        </div>
    )
}

export default withApollo(Movies);