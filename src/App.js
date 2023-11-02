import React from 'react';
import { Navbar, Header, Collections } from './components';
import './App.css';
import img1 from './assets/p9.JPG';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header img = {img1}/>
      <Collections/>
    </div>
  );
}

export default App;
