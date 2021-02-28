import React from 'react';
import Cards from '../projets/Cards';
import HeroSection from '../../organisms/header/HeroSection';
import Footer from '../../organisms/footer/Footer';
require('../../../App.css');
function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
