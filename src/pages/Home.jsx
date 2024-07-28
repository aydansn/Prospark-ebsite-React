import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        {/* <Menu/> */}
        <Footer/>
    </div>
  )
}

export default Home;