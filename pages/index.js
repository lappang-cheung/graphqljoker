import {useState} from "react";
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {

  const [trailerToggle, setTrailerToggle] = useState(false);
  
  const handleTrailerToggled = () => {
    setTrailerToggle(trailerToggle => !trailerToggle)
  }

  const { data, loading, error} = useQuery(HELLO_QUERY)

  if(loading) return <div>Loading...</div>

  return (
    <>
    <div className="banner banner_joker">
        <div className="content">
          <h2>Put on a <span>Happy</span> face</h2>
          <p>
            "My mother always tell me to smile ... and put on a happy face.
            She told me I had a purpose, to bring laughter and joy to the world.
            Is it just me or ..... Is it getting crazier out there?"
          </p>
          <a href={null} className="play">
            <img src="/static/play.png" alt="play" onClick={handleTrailerToggled}/>
              Watch Trailer
          </a>
          <div className="slide slide_joker"></div>
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
          src={`https://www.youtube-nocookie.com/embed/t433PEQGErc?${trailerToggle
            ? 'start=0': 'end=0'}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
        <img src="/static/close.png" alt="close" className="close" onClick={handleTrailerToggled}/>
      </div>
      </>
  )
}

export default withApollo(Home);