import React,{useEffect,useState} from "react";
import GradientBtn from "./GradientBtn";

import { FaBars, FaTimes } from "react-icons/fa";
import { Button, Link } from "react-scroll";

const Navbar = ({ isMenuShown, setIsMenuShown }) => {
  const links = [
    
    {
      id: 1,
      link: "HAKKIMIZDA",
    },
    {
      id: 2,
      link: "İLETİŞİM",
    },
  ];
  const openNewWindow = () => {
    const url = 'https://drive.google.com/file/d/1jr71YFJ9dAZQSpb7f9QWF6tYtSvpmwi2/view?usp=sharing';

    window.open(url, '_blank');
  };
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500); // Yanıp sönme süresi (milisaniye cinsinden)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="absolute w-full h-46 bg-black text-white z-20">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
        <div style={{ opacity: isVisible ? 1 : 0 }}>
            <h1 className="text-white-800 text-3xl ml-2">Semt Coffee</h1>
          </div>

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                >
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <button onClick={openNewWindow} className="ml-4 capitalize bg-gradient-to-r from-thOrange to-thBlue py-2 px-6 text-black rounded-lg duration-300 hover:scale-110">MENÜ </button>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      <div
        className={`w-full bg-black text-white absolute z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              <Link
                onClick={() => setIsMenuShown(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <button onClick={openNewWindow} className="ml-4 capitalize bg-gradient-to-r from-thOrange to-thBlue py-2 px-6 text-black rounded-lg duration-300 hover:scale-110">MENÜ </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
