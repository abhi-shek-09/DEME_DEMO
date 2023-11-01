import React from 'react';
import { Navbar, Header } from './components';
import './App.css';
import img1 from './assets/p10.JPG';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='exp' dir="rtl">
        <section>
          <Header img = {img1}/>
        </section>
      </div>
    </div>
  );
}

export default App;
