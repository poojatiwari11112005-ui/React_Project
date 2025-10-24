import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png';
import mail_icon from '../../assets/mail_icon.png';
import phone_icon from '../../assets/phone_icon.png';
import location_icon from '../../assets/location_icon.png';
import white_arrow from'../../assets/white_arrow.png'

const Contact = () =>{

    return(
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message<img src={msg_icon} alt=""/></h3>
                <p>Feel free to reach out through contact form <br/>or find our contact information below.<br/> Your feedback, questions, and suggestions <br/>are important to us as we strive to provide<br/> exceptional service to our university community</p>
                <ul>
                    <li><img src={mail_icon}/>Contact@edusity.dev</li>
                    <li><img src={phone_icon}/>+1 123-456-7890</li>
                    <li><img src={location_icon}/>66 Massachusterts Avg,Cambridge<br/> MA 02314,United States</li>
                </ul>
            </div>
            <div className="contact-col">
               <form>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter Your name' required/>
                 <label>Phone Number</label>
                <input type='text' name='phone number' placeholder='Enter Your moblie number' required/>
                <label>Write Your message here</label>
                <textarea name='message' rows="6" placeholder='Enter Your message' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow}/></button>

                </form> 
                <span></span>
            </div>
        </div>
    )
}

export default Contact