import React, { useEffect, useState } from "react";
import saffblack1 from "../images/saff black1.jpg";
import saffronface from "../images/spack.jpg";
import saffrontea from "../images/newinsightmedicine.jpeg";

const cardsData = [
  {
    image: saffrontea,
    title: "Culinary Mastery",
    description:
      "Add a single thread of saffron to your dish, and the moment it touches your food, the air fills with a rich, honeyed aroma.",
  },
  {
    image: saffronface,
    title: "Timeless Beauty",
    description:
      "Saffron is cherished for its beauty-enhancing properties, helping reduce fine lines and wrinkles, improve skin texture, and impart a radiant glow.",
  },
  {
    image: saffblack1,
    title: "Holistic Well-Being",
    description:
      "Saffron is celebrated for its remarkable health benefits, promoting mood enhancement, stress reduction, and digestive support.",
  },
];

const AutoSlidingCards = () => {
  const [cards, setCards] = useState(cardsData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        // Shift the first card to the end
        const updatedCards = [...prevCards.slice(1), prevCards[0]];
        return updatedCards;
      });
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center p-8 bg-[#aacbca] text-white overflow-hidden h-full">
      <div className="flex space-x-6 w-full justify-center items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-64 h-80 p-4 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform ${
              index === 1 ? "scale-110 z-10" : "scale-90 opacity-80"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold uppercase tracking-widest text-center">
              {card.title}
            </h3>
            <p className="text-sm mt-2 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlidingCards;
