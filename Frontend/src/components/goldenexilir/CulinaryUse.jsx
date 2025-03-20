import React, { useEffect, useState } from "react";
import "../../styles/CulinaryUse.css";
import culinaryback from "../../images/culinarymainnew.jpeg";
import Navbar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import { culinaryUsesData } from "./CulinaryData";
import SideBar from "../sidebar/SideBar";
import MenuSlider from "../sidebar/MenuSlider";
import { useUserContext } from "../../context/MainContext";
import ScrollToTop from "../ScrollToTop";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function CulinaryUse() {
  const useCases = ["biryani", "pilaf", "Stews", "IceCream", "GulabJamun"];
  const [currentUseCaseIndex, setCurrentUseCaseIndex] = useState(0);
  const { setShowNav, setSideBar, setMenuSlider } = useUserContext();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setMenuSlider(false);
    setSideBar(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentUseCaseIndex((prevIndex) => (prevIndex + 1) % useCases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, currentUseCaseIndex]);

  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  const prevUseCase = () => {
    setCurrentUseCaseIndex((prevIndex) =>
      prevIndex === 0 ? useCases.length - 1 : prevIndex - 1
    );
  };

  const nextUseCase = () => {
    setCurrentUseCaseIndex((prevIndex) => (prevIndex + 1) % useCases.length);
  };

  const currentUseCase = useCases[currentUseCaseIndex];

  const content = {
    biryani: {
      title: "biryani",
      description:
        "Saffron adds a unique and subtle flavor to biryani. It has a slightly sweet, earthy taste that enhances the overall flavor profile of the dish.",
      sections: [
        {
          heading: "aroma",
          text: "The aroma of saffron is distinct and can elevate the biryani with its warm, floral notes. This fragrance is often one of the first things people notice.",
        },
        {
          heading: "color",
          text: "Saffron imparts a vibrant golden-yellow color to the rice and meat in the biryani. This color is visually appealing and contributes to the dish's richness and elegance.",
        },
        {
          heading: "Infusion",
          text: "Saffron threads are typically steeped in warm milk or water before being added to the biryani. This helps release the color and flavor. Just a few threads are usually enough to achieve the desired effect.",
        },
        {
          heading: "Avoid Overuse",
          text: "Too much saffron can overpower the dish. Stick to a small quantity to maintain a balanced flavor.",
        },
      ],
    },
    pilaf: {
      title: "pilaf",
      description:
        "Saffron contributes a subtle, complex flavor to pilaf. Its unique, slightly sweet and earthy taste complements the other ingredients, adding depth and richness.",
      sections: [
        {
          heading: "Aroma",
          text: "The delicate, floral aroma of saffron can transform the aroma profile of a pilaf, making it more fragrant and inviting.",
        },
        {
          heading: "Color",
          text: "Saffron imparts a warm golden-yellow hue to the rice in pilaf. This vibrant color enhances the visual appeal of the dish, making it look more appetizing and elegant.",
        },
        {
          heading: "Infusion",
          text: "Before adding saffron to your pilaf, steep the threads in a small amount of warm water or broth. This helps release the color and flavor. A few threads are usually sufficient for a pot of pilaf.",
        },
        {
          heading: "Avoid Overuse",
          text: "Since saffron is intense, a little goes a long way. Using too much can overpower the dish.",
        },
      ],
    },
    Stews: {
      title: "Stews",
      description:
        "Saffron introduces a subtle, complex taste to stews. Its delicate, slightly sweet, and earthy notes can enhance the overall flavor profile, complementing the other ingredients in the stew.",
      sections: [
        {
          heading: "Aroma",
          text: "The floral and warm aroma of saffron can make stews more fragrant and appealing. It adds a layer of richness that can elevate the dish’s sensory experience.",
        },
        {
          heading: "Color",
          text: "Saffron imparts a golden-yellow hue to stews, giving them a visually appealing and rich appearance. This color can make the stew look more vibrant and appetizing.",
        },
        {
          heading: "Infusion",
          text: "To get the most out of saffron, steep the threads in a small amount of hot water or broth before adding them to the stew. This process helps to release the color and flavor. A pinch of saffron is usually sufficient for most stews.",
        },
        {
          heading: "Avoid Overuse",
          text: "Since saffron is strong, using too much can overpower the stew. Stick to a small quantity to maintain balance.",
        },
      ],
    },
    IceCream: {
      title: "Saffron Infused Ice-cream",
      description:
        "Saffron imparts a unique, slightly sweet, and earthy flavor to ice cream. This complex taste can add depth and sophistication, making the ice cream stand out from more traditional flavors.",
      sections: [
        {
          heading: "Aroma",
          text: "Saffron adds a floral, warm aroma to ice cream. This pleasant scent can enhance the sensory experience, making each bite more aromatic and inviting.",
        },
        {
          heading: "Color",
          text: "Saffron infuses a beautiful golden-yellow hue into the ice cream. This vibrant color makes the ice cream visually striking and adds an element of elegance.",
        },
        {
          heading: "Infusion",
          text: "Start by steeping saffron threads in a small amount of warm milk or cream. This helps to release the color and flavor. Let it sit for about 10-15 minutes.",
        },
        {
          heading: "Avoid Overuse",
          text: "Ensure that the saffron flavor complements the other ingredients in the ice cream. It should enhance the overall taste without overpowering it.",
        },
      ],
    },
    GulabJamun: {
      title: "Gulab Jamun",
      description:
        "Saffron adds a subtle, exotic flavor to gulab jamun. Its unique, slightly sweet, and earthy notes enhance the overall taste of the dessert, giving it a refined touch.",
      sections: [
        {
          heading: "Aroma",
          text: "Saffron imparts a warm, floral aroma that elevates the sensory experience of gulab jamun. This aroma makes the dessert more inviting and enhances its appeal.",
        },
        {
          heading: "Color",
          text: "Saffron infuses a beautiful golden hue into the syrup or the dough of gulab jamun. This vibrant color not only adds elegance to the dessert but also visually signifies its luxurious flavor.",
        },
        {
          heading: "Infusion",
          text: "Soak saffron threads in a small amount of warm milk or water to release their color and flavor. Let it steep for about 10-15 minutes.",
        },
        {
          heading: "Avoid Overuse",
          text: "Since saffron is potent, using too much can overpower the dessert. Stick to a small quantity to maintain balance.",
        },
      ],
    },
  };

  return (
    <div className="bg-cyan-100">
      <ScrollToTop />
      <Navbar />
      <SideBar />
      <MenuSlider />
      <div
        className="culinary_div1"
        style={{ backgroundImage: `url(${culinaryback})` }}
      >
        <div className="culinary_div11">
          <h1>CULINARY USES</h1>
        </div>
      </div>
      <div
        className={`mu_div1 relative pt-10 rounded-3xl m-20 shadow-lg p-6 bg-[#E7FFF8] ${currentUseCase}`}
      >
        {/* Left Arrow */}
        <button
          onClick={prevUseCase}
          className="absolute left-4 top-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <FaArrowLeft size={10} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextUseCase}
          className="absolute left-20 top-8 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <FaArrowRight size={10} />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          {isPlaying ? <FaPause size={10} /> : <FaPlay size={10} />}
        </button>
        <h1>{content[currentUseCase].title}</h1>
        <p>{content[currentUseCase].description}</p>
        {content[currentUseCase].sections.map((section, index) => (
          <div key={index}>
            <h1>{section.heading}</h1>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CulinaryUse;
