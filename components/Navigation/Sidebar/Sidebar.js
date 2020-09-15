import PropTypes from 'prop-types';
import Link from 'next/link';
import { withApollo } from '../../../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_MOVIES_TITLE = gql`
    query getMovies {
        movies {
            _id
            title
        }
    }
`;

const Sidebar = ({ 
  menuToggle, 
  setMenuToggle,
  movieSelected,
  setMovieSelected
}) => {

  const { data, loading, error} = useQuery(GET_MOVIES_TITLE)
  
  return (
    <aside
      className={
        menuToggle
          ? "sidebar activeBtn"
          : "sidebar"
      }
    >
      <img
        src="/static/close.png"
        alt="close"
        className={
          menuToggle
            ? "sidebar_close activeClose"
            : "sidebar_close"
        }
        onClick={() => setMenuToggle(false)}
      />
        <nav className="nav">
          <ul>
            {
              data && data.movies.map(link => {
                if(link.title === movieSelected) {
                  return (
                    <li
                      className="active"
                      style={{
                        cursor: 'pointer'
                      }}
                      key={`${link._id}`}
                      onClick={() => {
                        setMovieSelected(link.title)
                        setMenuToggle(false)
                      }}
                    >
                      <a href={null}>{link.title}</a>
                    </li>
                    )
                } else {
                  return (
                    <li
                      style={{
                        cursor: 'pointer'
                      }}
                      key={`${link._id}`}
                      onClick={() => {
                        setMovieSelected(link.title)
                        setMenuToggle(false)
                      }}
                    >
                      <a href={null}>{link.title}</a>
                    </li>
                    )
                }
              })
            }
          </ul>
        </nav>
    </aside>
  )
}

Sidebar.propTypes = {
    menuToggle: PropTypes.bool.isRequired,
    setMenuToggle: PropTypes.func.isRequired,
    movieSelected: PropTypes.string.isRequired,
    setMovieSelected: PropTypes.func.isRequired
}

export default withApollo(Sidebar);