import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
import { useState } from 'react';

const MyApp = ({ Component, pageProps }) => {

  const [movieSelected, setMovieSelected] = useState('Joker')

  return <Layout 
      setMovieSelected={setMovieSelected}
      movieSelected={movieSelected}
    >
    <Component {...pageProps} movieSelected={movieSelected}/>
  </Layout>
}

export default MyApp