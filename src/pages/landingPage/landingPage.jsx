import  React, { useRef } from 'react';
import NavBar from '../../componentes/sharedComponentes/navBar/NavBar';
import Cards from '../../componentes/cards/Cards';
import IntroSection from '../../componentes/introSection/IntroSection';
import b2 from '../../assets/b2.jpg'
import LoveSection from '../../componentes/loveSection/LoveSection';
import VideoSection from '../../componentes/videoSection/VideoSection';
import ReviewSection from '../../componentes/reviewSection/ReviewSection';
import SpicesVibe from '../../componentes/spicesVibeSection/SpicesVibe';
import LayOut from '../../componentes/sharedComponentes/layout/LayOut';
import Fotter from '../../componentes/sharedComponentes/fotter/Fotter';
import AboutUs from '../../componentes/aboutUs/AboutUs';

function LandingPage(props) {
    // Create a ref to the element you want to scroll to
  const scrollToRef = useRef(null);

  // Function to handle button click
  const handleClick = () => {
    // Scroll to the referenced element
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <div>
            <div style={{ height: "10vh", backgroundColor: "#383838" }} >
                <NavBar />
            </div>
            <div style={{
                backgroundImage: `url(${b2})`, backgroundRepeat: "no-repeat",
                backgroundSize: "cover", display: "flex", flexDirection: "column", paddingBlock: "30vh", paddingInline: "8vw"
            }} ref={scrollToRef} >
                <IntroSection />
            </div>
            <LayOut bgcolor="#F6D6D6" >
                <AboutUs />
            </LayOut>
            <div style={{ backgroundColor: "#383838", paddingInline: "8vw", paddingBlock: "10vh" }}>
                <Cards />
            </div>
            <LayOut bgcolor="#F6D6D6">
                <LoveSection />
            </LayOut>
            <div style={{ width: "100%", backgroundColor: "#383838" }}>
                <VideoSection />
            </div>
            <LayOut bgcolor="#F6D6D6">
                <ReviewSection />
            </LayOut>
            <LayOut bgcolor="#F6D6D6">
                <SpicesVibe />
            </LayOut>
            <LayOut bgcolor="#383838" >
                <Fotter handleClick={handleClick} />
            </LayOut>

        </div>
    )
}

export default LandingPage