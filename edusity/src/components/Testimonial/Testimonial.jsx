import React, { useRef } from "react";
import './Testimonial.css';

import next_icon from '../../assets/next_icon.png';
import back_icon from '../../assets/back_icon.png';
import user_1 from '../../assets/user_1.png';
import user_2 from '../../assets/user_2.png';
import user_3 from '../../assets/user_3.png';
import user_4 from '../../assets/user_4.png';

const Testimonial = () => {

    
   const slider = useRef();
const tx = useRef(0);

const sliderForward = () => {
  if (tx.current > -50) {
    tx.current -= 25;
  }
  slider.current.style.transform = `translateX(${tx.current}%)`;
};

const sliderBackward = () => {
  if (tx.current < 0) {
    tx.current += 25;
  }
  slider.current.style.transform = `translateX(${tx.current}%)`;
};



  return (
    <div className="testimonial">
      <img src={next_icon} alt="Next" className="next-btn"  onClick={sliderForward}/>
      <img src={back_icon} alt="Back" className="back-btn" onClick={sliderBackward}/>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="user-info">
              <img src={user_1} alt="User 1" />
              <div>
                <h3>Willion Jackson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
          </li>

          <li>
            <div className="user-info">
              <img src={user_2} alt="User 2" />
              <div>
                <h3>Emma Stone</h3>
                <span>Edusity, Canada</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
          </li>

          <li>
            <div className="user-info">
              <img src={user_3} alt="User 3" />
              <div>
                <h3>Linda Lee</h3>
                <span>Edusity, UK</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
          </li>

          <li>
            <div className="user-info">
              <img src={user_4} alt="User 4" />
              <div>
                <h3>John Doe</h3>
                <span>Edusity, Australia</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
