import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../Header/Header';
import Sidebar from '../Navigation/Sidebar/Sidebar';

const Layout = ({ children }) => {
  
  const [menuToggle, setMenuToggle] = useState(false);
  
  const handleKeyBoardPress = event => {
    if(event.keyCode === 27) {
      setMenuToggle(false)
    }
  }
  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyBoardPress, false);
    
    return () => {
      document.removeEventListener("keydown", handleKeyBoardPress, false);
    };
  }, []);
  
  return (
    <div>
      <Head>
        <title>Joker</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
      />
      <Sidebar
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
      />
      {children}
    </div>
  );
};

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default Layout;