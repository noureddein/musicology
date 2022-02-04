import React, { useEffect } from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Story from './Components/Story';
import Pricing from './Components/Pricing';
import Blogs from './Components/Blogs';
import Statistics from './Components/Statistic';
import Section from './Components/Section';
import Subscribe from './Components/Subsicribe';
import Footer from './Components/Footer';
import addClass from './Common/observer'


function App() {

  useEffect(() => { addClass() })
  return (

    <>
      <NavBar />
      <Hero />
      <Story />
      <Pricing />
      <Blogs />
      <Statistics />
      <Section />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
