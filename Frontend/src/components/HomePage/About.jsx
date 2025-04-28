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
      <section className="relative bg-gradient-to-b from-yellow-100 to-white">
        <div className="mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-widest transform transition-transform duration-300" style={{ transform: `translateY(${trans}px)` }}>
            Z PRINCESS SAFFRON
          </h1>
          <img src={bff} alt="Background" className="w-full h-72 mt-6 rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-xl font-bold text-black tracking-widest">WHO WE ARE</h2>
          <div className="w-16 h-[0.10rem] bg-black mx-auto my-4"></div>
          <p className="text-gray-800 text-sm leading-relaxed tracking-wider">
            Z PRINCESS SAFFRON is a distinguished saffron seller located in Chennai, India, dedicated to bringing you the world’s finest saffron. Our saffron is meticulously harvested from the most prestigious regions – Kashmir, Spain, and Iran.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
          <div className="md:w-1/2">
            <img src={crocuses} alt="Crocuses" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-xl font-bold text-black tracking-widest uppercase">Our Commitment</h2>
            <p className="text-gray-800 text-sm tracking-wider leading-relaxed mt-4">
              We are passionate about offering an authentic saffron experience. Every thread of saffron you purchase from us is pure, unadulterated, and of the highest standard.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-xl tracking-widest font-bold text-black">OUR MISSION</h2>
        <div className="w-16 h-[0.10rem] bg-black mx-auto my-4"></div>
        <p className="text-gray-800 text-sm tracking-wider leading-relaxed">
          Our mission is to provide our customers with unparalleled service and a product that stands out in terms of quality and authenticity. Trust Z PRINCESS SAFFRON to deliver an exceptional saffron experience.
        </p>
      </section>

      <section className="bg-yellow-50 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-800 text-sm tracking-wider leading-relaxed">
              Join us in celebrating the timeless allure of saffron. With Z PRINCESS SAFFRON, every aspect of your life becomes a little more luxurious and memorable.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={abtend1} alt="Saffron" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
