import React from 'react';
import { Navbar, Header, Collections } from './components';
import './App.css';
import img1 from './assets/p9.JPG';
import ParallaxSection from './ParallaxSection'; // Import the ParallaxSection component

function App() {
  return (
    <div className="App">
      <Navbar />
      <ParallaxSection imageSrc={img1}>
        <Header img={img1} />
      </ParallaxSection>
      <Collections />
    </div>
  );
}

export default App;
