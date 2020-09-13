import Head from 'next/head';
import {useState, useEffect} from "react";

import Header from '../Header/Header';
import Sidebar from '../Navigation/Sidebar/Sidebar';

const Layout = ({ children }) => {
  
  const [menuToggle, setMenuToggle] = useState(false);
  
  const handleKeyBoardPress = event => {
    if(event.keyCode === 27) {
      setMenuToggle(false)
    }
  }
  
  const handleMenuToggled = (event) => {
     setMenuToggle(menuToggle => !menuToggle)
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
        handleMenuToggle={handleMenuToggled}
      />
      <Sidebar
        menuToggle={menuToggle}
        handleMenuToggle={handleMenuToggled}
      />
      {children}
    </div>
  );
};

export default Layout;