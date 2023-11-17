import { useState,useEffect  } from "react";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import Menu from "./components/Menu";
import ThreeVideos from "./components/ThreeVideos";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension())
      }
      window.addEventListener('resize', updateDimension);
  
  
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })
  }, [screenSize])

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <About isMenuShown={isMenuShown}/>
      <Menu/>
      <ThreeVideos/>
      <Contact />
      <Footer />
      <SocialLinks/>
    </div>
  );
}

export default App;