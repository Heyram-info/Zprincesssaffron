import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../../context/MainContext";
import Navbar from "../../navbar/NavBar";
import SideBar from "../sidebar/SideBar";
import MenuSlider from "../sidebar/MenuSlider";
import Footer from "../../footer/Footer";
import ScrollToTop from "../ScrollToTop";
import crocuses from "../../images/crocuses.jpg";
import abtend1 from "../../images/abtend1.jpg";
import bff from "../../images/aboutback1.png";

function About() {
  const { pathname } = useLocation();
  const [trans, setTrans] = useState(120);
  const { isMobile, setMenuSlider, setSideBar, setShowNav } = useUserContext();

  useEffect(() => {
    setMenuSlider(false);
    setSideBar(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setTrans(120 - scrollTop / 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <SideBar />
      <MenuSlider />

      {/* Immersive Vertical Storytelling Section */}
      <div className="pt-20 bg-gradient-to-b from-[#8157c9] to-white">
      <section className="bg-gradient-to-b from-[#8157c9] to-white py-28 px-6 relative ">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-50 opacity-20 z-0" />
        <div className="max-w-3xl mx-auto z-10 relative text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-widest mb-6">Z PRINCESS SAFFRON</h1>
          <p className="text-lg text-gray-500 tracking-widest leading-relaxed">
            At the crossroads of ancient heritage and modern purity, Z PRINCESS SAFFRON embodies the golden promise of authenticity.
          </p>
        </div>
      </section>

      </div>
      

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-20">
          <div className="text-center max-w-4xl">
            <h2 className="text-3xl font-semibold text-black uppercase tracking-widest mb-4">Our Essence</h2>
            <p className="text-gray-500 leading-loose">
              We aren’t just merchants of saffron—we’re curators of a legacy. Each strand tells a story from high Himalayan valleys and sun-kissed Spanish fields. With every harvest, we preserve a piece of heritage, transforming kitchens, ceremonies, and lives.
            </p>
          </div>
          <div className="w-full grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-xl p-6 rounded-xl text-center">
              <h3 className="text-xl font-normal tracking-wider uppercase text-black mb-2">Origin-Based Sourcing</h3>
              <p className="text-sm text-gray-600">Direct partnerships with farms in Kashmir, Iran, and Spain ensure true traceability and freshness.</p>
            </div>
            <div className="bg-white shadow-xl p-6 rounded-xl text-center">
              <h3 className="text-xl font-normal tracking-wider uppercase text-black mb-2">Laboratory Tested</h3>
              <p className="text-sm text-gray-600">Each batch is tested for purity, aroma, and color strength before it reaches your hands.</p>
            </div>
            <div className="bg-white shadow-xl p-6 rounded-xl text-center">
              <h3 className="text-xl font-normal tracking-wider uppercase text-black mb-2">Crafted Experiences</h3>
              <p className="text-sm text-gray-600">We believe saffron is more than spice—it's a symbol of wellness, celebration, and royalty.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-yellow-50">
        <div className="absolute inset-0">
          <img src={crocuses} alt="Crocuses" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div>
            <img src={abtend1} alt="Harvest" className="rounded-xl shadow-2xl w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black uppercase tracking-widest mb-6">A Culture of Saffron</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our vision is simple: make luxury ethical, and authenticity accessible. From sacred rituals to Michelin-starred dishes, our saffron enriches every moment. We're proud to redefine saffron—from commodity to craft.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Explore our journey, share our story, and taste the legacy in every golden thread.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-yellow-800 uppercase tracking-widest mb-4">Signature Quote</h2>
          <blockquote className="text-3xl italic text-yellow-700 font-light overflow-hidden h-10 tracking-wider">
            “Every thread must whisper luxury, heritage, and healing.”
          </blockquote>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
