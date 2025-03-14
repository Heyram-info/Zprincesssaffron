import { useEffect } from "react";
import { motion } from "framer-motion";
import v4 from "../images/v4.mp4";
import purity from "../images/puritynew.jpeg";
import source from "../images/ethical.jpeg";
import cur from "../images/saffronjasmin.webp";
import skincare from "../images/facecarenew.jpeg";
import tea from "../images/saffronteanew.jpeg";
import crocusback from "../images/crocusback.jpg";
import Navbar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import SideBar from "./sidebar/SideBar";
import MenuSlider from "./sidebar/MenuSlider";
import { useUserContext } from "../context/MainContext";

function ChooseUs() {
  const { setShowNav, setMenuSlider, setSideBar } = useUserContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuSlider(false);
    setSideBar(false);
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-orange-100 min-h-screen">
      <Navbar />
      <SideBar />
      <MenuSlider />
      
      <motion.div className="relative w-full h-screen overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src={v4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <motion.h1 className="text-5xl font-semibold tracking-widest" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            OUR SAFFRON
          </motion.h1>
          <motion.p className="mt-4 text-md text-white tracking-wider max-w-3xl" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
            At Z Princess Saffron, we pride ourselves on offering the highest quality saffron sourced from the renowned regions of Kashmir, Iran, and Spain.
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto py-16 space-y-16">
        {[{
          title: "Unmatched Quality and Purity",
          content: "Our saffron is celebrated for its vibrant color, rich flavor, and notable health benefits.",
          image: purity
        }, {
          title: "Ethical and Sustainable Sourcing",
          content: "We ensure fair compensation and support traditional farming methods while maintaining exceptional quality.",
          image: source
        }].map((section, index) => (
          <motion.div className="flex flex-col md:flex-row items-center px-4 md:px-10" key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'order-2' : 'order-1'} p-6`}>
              <h1 className="text-xl uppercase tracking-widest font-bold text-orange-800">{section.title}</h1>
              <p className="mt-4 text-md tracking-wider text-gray-700">{section.content}</p>
            </div>
            <div className="md:w-1/2 order-1 flex justify-center">
              <img src={section.image} className="rounded-2xl shadow-lg w-3/4" alt={section.title} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-orange-50 py-16 text-center rounded-3xl mx-10">
        <h1 className="text-3xl font-semibold uppercase tracking-widest text-orange-800">Versatile Uses</h1>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {[{ image: cur, title: "Culinary Delights", content: "Enhance flavors with our premium saffron." },
            { image: skincare, title: "Radiant Glow", content: "Boost skin health with antioxidant-rich saffron." },
            { image: tea, title: "Balanced Living", content: "Experience saffron's stress-relief benefits." }].map((item, i) => (
              <motion.div key={i} className="w-72 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <img src={item.image} className="rounded-xl h-40 object-cover w-full" alt={item.title} />
                <h1 className="text-lg font-semibold uppercase tracking-widest text-orange-700 mt-4">{item.title}</h1>
                <p className="text-gray-600 text-sm tracking-wide mt-2">{item.content}</p>
              </motion.div>
          ))}
        </div>
      </div>

      <motion.div className="relative w-full h-96 mt-16 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <img src={crocusback} className="absolute w-full h-full object-cover" alt="Crocus Flower" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-3xl font-semibold uppercase tracking-widest">Elevate Your Experience</h1>
          <p className="mt-4 max-w-4xl text-md text-white tracking-widest">Choose Z Princess Saffron for culinary, beauty, and wellness excellence.</p>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
}

export default ChooseUs;
