import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/programs/program.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footet.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
// import Smalldevice from "./components/Smalldevice/Smalldevice.jsx";

const App = () => {
  const [playState, setPlayState] = useState(false);  // <-- Fixed typo here

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title />
        <Title subTitle="Our PROGRAM" title="What We offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIAL" title="What Student Says" />
        <Testimonial />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />

        {/* Add a test button here to open the video */}
        <button onClick={() => setPlayState(true)}></button>
        {/* <Smalldevice/> */}
      </div>

      {/* Pass correctly named props */}
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
