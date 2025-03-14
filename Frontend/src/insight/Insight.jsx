import React, { useEffect, useRef, useState } from "react";
import "../styles/Insight.css";
import Navbar from "../navbar/NavBar";
import { useUserContext } from "../context/MainContext";
import Footer from "../footer/Footer";
import saffblack1 from "../images/saff black1.jpg";
import saffronface from "../images/spack.jpg";
import saffronrice from "../images/culinarymilk.jpeg";
import saffrontea from "../images/newinsightmedicine.jpeg";
import insightback from "../images/insightvideo.mp4";
import SideBar from "../components/sidebar/SideBar";
import MenuSlider from "../components/sidebar/MenuSlider";
import ScrollToTop from "../components/ScrollToTop";

function Insight() {
  const { setShowNav, setSideBar, setMenuSlider } = useUserContext();
  const [width, setWidth] = useState(70);
  const [isAtTop, setIsAtTop] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowNav]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <SideBar />
      <MenuSlider />

      <div className="relative bg-gradient-to-b from-yellow-600 to-yellow-200 text-white">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <video loop autoPlay muted className="w-full h-full object-cover">
            <source src={insightback} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col items-center justify-center h-screen text-center relative z-10 p-8">
          <h1 className="text-5xl font-bold mb-4 text-shadow-lg tracking-widest">INSIGHT</h1>
          <p className="text-md mb-6 text-white tracking-widest">In the delicate petals of saffron, tradition finds its fragrance, and life its vibrance.</p>
        </div>
      </div>

      <div className="">
        <div className="max-w-5xl mx-auto text-center bg-white p-8 md:p-16 h-screen flex justify-center items-center flex-col">
          <h2 className="text-3xl font-medium text-black uppercase tracking-wider mb-4">The Secrets of the Crocus Sativus</h2>
          <p className="text-md text-black tracking-wider mb-8">
            Step into a world where history and luxury meet with our premium saffron collection. Cultivated with deep respect for its legendary qualities, each saffron thread tells a story of ancient royalty and offers the promise of vibrant culinary delights, radiant skin, and a touch of well-being magic.
          </p>
        </div>

        <div className="flex flex-wrap justify-around space-y-8 md:space-y-0 overflow-hidden bg-[#aacbca] text-white p-8 md:p-16 ">
          <div className="flex-1 text-center p-4 transition-transform transform hover:scale-105">
            <img src={saffrontea} alt="Saffron Image 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <div className="mt-4 text-xl font-semibold tracking-widest uppercase">Culinary Mastery</div>
            <p className="text-white mt-2 text-sm tracking-wider">Add a single thread of saffron to your dish, and the moment it touches your food, the air fills with a rich, honeyed aroma.</p>
          </div>
          <div className="flex-1 text-center p-4 transition-transform transform hover:scale-105">
            <img src={saffronface} alt="Saffron Image 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <div className="mt-4 text-lg font-semibold tracking-widest uppercase">Timeless Beauty</div>
            <p className="text-white mt-2 text-sm tracking-wider">Saffron is cherished for its beauty-enhancing properties, helping reduce fine lines and wrinkles, improve skin texture, and impart a radiant glow.</p>
          </div>
          <div className="flex-1 text-center p-4 transition-transform transform hover:scale-105">
            <img src={saffblack1} alt="Saffron Image 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <div className="mt-4 text-lg font-semibold tracking-widest uppercase">Holistic Well-Being</div>
            <p className="text-white mt-2 text-sm tracking-wider">Saffron is celebrated for its remarkable health benefits, promoting mood enhancement, stress reduction, and digestive support.</p>
          </div>
        </div>

        {/* <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Quality and Tradition</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our premium saffron is the key to unlocking this ancient magic. Each thread is a result of meticulous hand-picking and drying processes, ensuring the highest quality and potency.
          </p>
        </div> */}

        <div className="max-w-5xl mx-auto text-center bg-white p-8 md:p-16">
          <h2 className="text-3xl font-medium text-black uppercase tracking-wider mb-4">Quality and Tradition</h2>
          <p className="text-md text-black tracking-wider mb-8">
            Our premium saffron is the key to unlocking this ancient magic. Each thread is a result of meticulous hand-picking and drying processes, ensuring the highest quality and potency.
          </p>
        </div>

        <div className="max-w-5xl mx-auto text-center bg-white p-8 md:p-16">
          <h2 className="text-3xl font-medium text-black uppercase tracking-wider mb-4">Experience the Magic</h2>
          <p className="text-md text-black tracking-wider mb-8">
            Discover the golden threads that have woven their way through history and let saffron’s magic elevate your life in ways you've never imagined.
          </p>
        </div>

        {/* <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Experience the Magic</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the golden threads that have woven their way through history and let saffron’s magic elevate your life in ways you've never imagined.
          </p>
        </div> */}
      </div>

      <Footer />
    </>
  );
}

export default Insight;
