import React, { useEffect, useState } from "react";
import "../../styles/Beauty.css";
import beautymain from "../../images/beautyuseback.png";
import Navbar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import { useUserContext } from "../../context/MainContext";
import SideBar from "../sidebar/SideBar";
import MenuSlider from "../sidebar/MenuSlider";
import ScrollToTop from "../ScrollToTop";

function Beauty() {
  const useCases = ["brightning", "antiaging", "skintone", "acne"];
  const [currentUseCaseIndex, setCurrentUseCaseIndex] = useState(0);
  const { setShowNav, setSideBar, setMenuSlider } = useUserContext();

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
    const interval = setInterval(() => {
      setCurrentUseCaseIndex((prevIndex) => (prevIndex + 1) % useCases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentUseCase = useCases[currentUseCaseIndex];

  const content = {
    brightning: {
      title: "Skin Brightening and Radiance",
      description:
        "Saffron’s rich antioxidant content helps to lighten skin pigmentation and enhance radiance. Compounds like crocin and safranal work to reduce melanin production, leading to a more even skin tone.",
      sections: [
        {
          heading: "Chemical Composition",
          text: "This carotenoid pigment is primarily responsible for saffron’s color and has potent antioxidant properties. Crocin helps reduce oxidative stress in skin cells, leading to a more luminous complexion.",
        },
        {
          heading: "Clinical Studies",
          text: "Some clinical studies and trials suggest that saffron extracts can improve skin brightness and reduce hyperpigmentation. For example, a study published in the 'Journal of Cosmetic Dermatology' found that a saffron-based topical formulation improved skin radiance and evenness in participants.",
        },
        {
          heading: "Mechanism of Action",
          text: "Reduction of Melanin Production: Saffron's active compounds can inhibit the enzyme tyrosinase, which plays a key role in melanin synthesis. By reducing tyrosinase activity, saffron can help lighten dark spots and even out skin tone.",
        },
        {
          heading: "Formulation and Application",
          text: "Topical Products: Saffron is commonly included in creams, serums, and masks. These products can provide direct benefits when applied to the skin.",
        },
        {
          heading: "Considerations",
          text: "Saffron is generally safe for most skin types, but some individuals may experience sensitivity. Always perform a patch test before using new products.",
        },
      ],
    },
    antiaging: {
      title: "Anti-Aging and Wrinkle Reduction",
      description:
        "The antioxidants in saffron combat oxidative stress and prevent premature aging. Saffron helps to stimulate collagen production, which improves skin elasticity and reduces the appearance of fine lines and wrinkles.",
      sections: [
        {
          heading: "Antioxidant Properties",
          text: "Saffron contains powerful antioxidants like crocin, crocetin, and safranal. These antioxidants help neutralize free radicals-unstable molecules that can damage skin cells and accelerate aging. By reducing oxidative stress, saffron helps to prevent premature aging and the formation of wrinkles.",
        },
        {
          heading: "Anti-Inflammatory Effects",
          text: "The anti-inflammatory compounds in saffron can help reduce inflammation and redness in the skin. Chronic inflammation is a factor that can lead to skin aging, so minimizing it helps maintain skin health and elasticity.",
        },
        {
          heading: "Skin Hydration",
          text: "Saffron can enhance skin hydration by improving the skin's ability to retain moisture. Well-hydrated skin is more supple and less prone to developing fine lines and wrinkles.",
        },
      ],
    },
    skintone: {
      title: "Even Skin Tone and Redness Reduction",
      description:
        "Saffron’s anti-inflammatory properties help to calm irritated skin and reduce redness. It also aids in balancing skin tone and soothing conditions like rosacea or redness.",
      sections: [
        {
          heading: "Melanin Regulation",
          text: "Saffron contains compounds like crocin and picrocrocin that may inhibit the enzyme tyrosinase, which is crucial for melanin production. By reducing melanin production, saffron helps to lighten hyperpigmentation, dark spots, and uneven skin tone, leading to a more uniform complexion.",
        },
        {
          heading: "Anti-Inflammatory Properties",
          text: "The anti-inflammatory compounds in saffron, such as crocetin and safranal, help calm inflammation and redness in the skin. This can be particularly beneficial for conditions like rosacea or post-acne redness, as reducing inflammation can alleviate the appearance of redness and improve overall skin tone.",
        },
        {
          heading: "Antioxidant Effects",
          text: "Saffron’s antioxidants help protect the skin from oxidative stress and environmental damage, which can exacerbate redness and uneven skin tone. By neutralizing free radicals, saffron helps maintain a more even and healthy complexion.",
        },
      ],
    },
    acne: {
      title: "Acne Treatment and Skin Clarity",
      description:
        "Saffron’s antibacterial and anti-inflammatory properties make it beneficial for treating acne and preventing breakouts. It helps to clear up blemishes and improve overall skin clarity.",
      sections: [
        {
          heading: "Antimicrobial Properties",
          text: "Saffron contains antimicrobial compounds like crocin and safranal that can help inhibit the growth of acne-causing bacteria, such as Propionibacterium acnes. This can reduce the severity and frequency of breakouts.",
        },
        {
          heading: "Anti-Inflammatory Effects",
          text: "The anti-inflammatory properties of saffron help to reduce redness, swelling, and irritation associated with acne. By calming inflammation, saffron can make acne lesions less noticeable and improve overall skin clarity.",
        },
        {
          heading: "Antioxidant Benefits",
          text: "Saffron’s antioxidants help neutralize free radicals that can cause oxidative stress and damage to skin cells. This can help prevent inflammation and promote healthier skin, contributing to clearer skin over time.",
        },
      ],
    },
  };

  return (
    <div className="bg-pink-200">
      <ScrollToTop />
      <Navbar />
      <SideBar />
      <MenuSlider />
      <div
        className="culinary_div1"
        style={{ backgroundImage: `url(${beautymain})` }}
      >
        <div className="culinary_div11">
          <h1>BEAUTY USES</h1>
        </div>
      </div>
      <div className={`beauty_div1 pt-10 rounded-3xl m-20 ${currentUseCase}`}>
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

export default Beauty;
