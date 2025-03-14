import React, { useEffect, useState } from "react";
import "../../styles/MedicinalUse.css";
import medipic from "../../images/5.avif";
import Navbar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import { useUserContext } from "../../context/MainContext";
import SideBar from "../sidebar/SideBar";
import MenuSlider from "../sidebar/MenuSlider";
import ScrollToTop from "../ScrollToTop";

function MedicinalUse() {
  const useCases = ["depression", "health", "pain", "digestive"];
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
    depression: {
      title: "Depression and Anxiety",
      description:
        "Saffron, a spice derived from the flower of Crocus sativus, has been studied for its potential effects on mood and mental health, including depression and anxiety. Here’s a summary of how saffron may influence these conditions.",
      sections: [
        {
          heading: "Mood Regulation",
          text: "Saffron contains several active compounds, such as crocin and safranal, which have been shown to have potential antidepressant and anxiolytic (anxiety-reducing) effects. These compounds may influence neurotransmitter systems in the brain, particularly serotonin and dopamine, which play key roles in regulating mood.",
        },
        {
          heading: "Clinical Studies",
          text: "Research has suggested that saffron supplementation may be effective in reducing symptoms of depression. Studies have found that saffron extracts can be as effective as conventional antidepressant medications like selective serotonin reuptake inhibitors (SSRIs) in some cases, with fewer side effects.",
        },
        {
          heading: "Mechanism of Action",
          text: "Saffron is believed to influence the levels of serotonin, dopamine, and norepinephrine in the brain, which are neurotransmitters involved in mood regulation.",
        },
        {
          heading: "Dosage and Safety",
          text: "Clinical studies have used varying doses of saffron, typically ranging from 15 to 30mg per day. It's essential to follow recommended dosages and consult a healthcare professional before starting any new supplement.",
        },
      ],
    },
    health: {
      title: "Cognitive Health and Memory Improvement",
      description:
        "Saffron has been investigated for its potential effects on cognitive health and memory improvement. Here’s a detailed look at how saffron might influence these areas",
      sections: [
        {
          heading: "Active Compounds and Mechanisms",
          text: "Saffron contains several bio-active compounds, including crocin, safranal, and picrocrocin, which are believed to contribute to its cognitive benefits. Here’s how these compounds might work.",
        },
        {
          heading: "Clinical Studies",
          text: "Clinical trials have shown that saffron may improve cognitive function in patients with Alzheimer’s disease. For example, a study published in the journal Phytotherapy Research found that saffron supplementation improved cognitive function and daily living activities in Alzheimer's patients.",
        },
        {
          heading: "Mechanism of Action",
          text: "The antioxidant properties of saffron can help neutralize free radicals and reduce oxidative stress, which is linked to cognitive decline.",
        },
        {
          heading: "Dosage and Safety",
          text: "Effective doses used in studies typically range from 20 to 30mg per day. It's important to adhere to recommended dosages and consult with a healthcare provider for personalized advice.",
        },
      ],
    },
    pain: {
      title: "Anti-Inflammatory and Pain Relief",
      description:
        "Saffron has been studied for its potential anti-inflammatory and pain-relief properties. Here’s an overview of how saffron might contribute to these effects.",
      sections: [
        {
          heading: "Pain relief",
          text: "Saffron has been shown to have mild analgesic effects in some studies. Its ability to reduce inflammation can indirectly contribute to pain relief, as inflammation is often a source of pain.",
        },
        {
          heading: "Clinical studies",
          text: "Saffron has also been investigated for its effects on menstrual pain (dysmenorrhea). Research indicates that saffron may help alleviate menstrual cramps and reduce the severity of pain.",
        },
        {
          heading: "Dosage and Safety",
          text: "Effective dosages for anti-inflammatory and pain-relief effects generally range from 20 to 30mg per day. It’s important to follow recommended dosages and consult with a healthcare provider for personalized advice.",
        },
      ],
    },
    digestive: {
      title: "Digestive Health",
      description:
        "Saffron has been studied for its potential benefits to digestive health. Here’s a detailed look at how saffron might contribute to various aspects of digestive wellness.",
      sections: [
        {
          heading: "Digestive Benefits",
          text: "Saffron's active compounds, such as crocin and safranal, have antioxidant and anti-inflammatory properties. These can help reduce oxidative stress and inflammation in the digestive tract, which may alleviate symptoms of digestive disorders.",
        },
        {
          heading: "Clinical Studies",
          text: "Saffron has been studied for its potential to protect against peptic ulcers. Research has suggested that saffron may help reduce ulcer formation and promote healing of the gastric mucosa. Its anti-inflammatory and antioxidant properties may contribute to this protective effect.",
        },
        {
          heading: "Mechanism of Action",
          text: "By reducing inflammation in the digestive tract, saffron may help alleviate conditions such as gastritis and inflammatory bowel diseases.",
        },
        {
          heading: "Dosage and Safety",
          text: "For digestive health, doses typically range from 20 to 30mg per day. It’s important to follow recommended dosages and consult with a healthcare provider for personalized advice.",
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
        style={{ backgroundImage: `url(${medipic})` }}
      >
        <div className="culinary_div11">
          <h1>MEDICINAL USES</h1>
        </div>
      </div>
      <div className={`mu_div1 pt-10 rounded-3xl m-20 ${currentUseCase}`}>
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

export default MedicinalUse;
