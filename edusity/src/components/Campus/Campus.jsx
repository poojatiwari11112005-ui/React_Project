import React from 'react';
import './Campus.css';

// Import images
import campus1 from '../../assets/campus-photo1.png';
import campus2 from '../../assets/campus-photo2.png';
import campus3 from '../../assets/campus-photo3.png';
import campus4 from '../../assets/campus-photo4.png';
import white_arrow from '../../assets/white_arrow.png';

// Campus component
const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={campus1} alt="Campus 1" />
        <img src={campus2} alt="Campus 2" />
        <img src={campus3} alt="Campus 3" />
        <img src={campus4} alt="Campus 4" />
      </div>
      <button className=' btn dark-btn'>See more here<img src={white_arrow}/></button>
    </div>
  );
};

export default Campus
