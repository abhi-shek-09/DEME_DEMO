import React from 'react';
import img01 from '../assets/p2.JPG';
import img02 from '../assets/p8.JPG';
import './collections.css'
const Collections = () => {
  return (
    <div className='deme__collections'>
      <div className='deme__collections-panes'>
        <div className='deme__collections-img1'>
            <img src={img01} alt='img'/>
            <h1>Beads &rarr; 1</h1>
        </div>
        <div className='deme__collections-img2'>
            <img src={img02} alt='img'/>
            <h1>Beads &rarr; 2</h1>
        </div>
      </div>
    </div>
  );
}

export default Collections;
