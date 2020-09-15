import {useState} from "react";
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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

const Home = ({movieSelected}) => {

  const [trailerToggle, setTrailerToggle] = useState(false);

  const { data, loading, error} = useQuery(GET_MOVIES)

  return (
    <>
      {
        data && data.movies.map(movie => {
          if(movie.title === movieSelected) {
            return (
              <div key={movie._id}>
                <div className={`banner banner_${movieSelected.toLowerCase().replace(' ', '')}`}>
                  <div className="content">
                  <h2 dangerouslySetInnerHTML={{__html: movie.quote}}/>
                    
                    <p>{movie.line}</p>
                    <a href={null} className="play">
                      <img src="/static/play.png" alt="play" onClick={() => setTrailerToggle(!trailerToggle)}/>
                        Watch Trailer
                    </a>
                    <div className={`slide slide_${movieSelected.toLowerCase().replace(' ', '')}`}></div>
                    <ul className="sci">
                      <li><a href="#"><img src="/static/facebook.png"/></a></li>
                      <li><a href="#"><img src="/static/twitter.png"/></a></li>
                      <li><a href="#"><img src="/static/instagram.png"/></a></li>
                      <li className="sci_copyright">Copyright &copy; {new Date().getFullYear()}</li>
                    </ul>
                  </div>
                </div>
                <div className={trailerToggle ? 'trailer active' : 'trailer' }>
                  <iframe 
                    className="video" width="80%" height="80%"
                    src={`${movie.trailer}${trailerToggle
                      ? 'start=0': 'end=0'}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
                  <img src="/static/close.png" alt="close" className="close" onClick={() => setTrailerToggle(!trailerToggle)}/>
                </div>
              </div>
            )
          }
        })
      }
    </>
  )
}

export default withApollo(Home);