import React from 'react';
import './program.css';
import program1 from '../../assets/program1.JPG';
import program2 from '../../assets/program2.JPG';
import program3 from '../../assets/program3.JPG';
import img1 from'../../assets/img1-icon.png';
import img2 from'../../assets/img2-icon.png';
import img3 from'../../assets/img3-icon.png';

const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program1} alt='' />
        <div className='caption'>
          <img src={img1} alt="icon" />

          <p>Gradution Degree</p>
        </div>

      </div>
      <div className="program">
        <img src={program2} alt='' />
        <div className='caption'>
        <img src={img2} alt="icon" />

          <p>Master Degree</p>
        </div>

      </div>
      <div className="program">
        <img src={program3} alt='' />
        <div className='caption'>
          <img src={img3} alt="icon" />

          <p>Post Degree</p>
        </div>

      </div>
    </div>
  );
}

export default Program;
