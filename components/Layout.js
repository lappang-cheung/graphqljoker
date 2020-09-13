import Head from 'next/head';
import Nav from './Navbar';


const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Nav />
            {children}
        </div>
    )
};

export default Layout;