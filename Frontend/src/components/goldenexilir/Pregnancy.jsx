import React, { useEffect } from "react";
import "../../styles/Pregnancy.css";
import pregnancyback from "../../images/pregnancyback.jpg";
import saffronmilk1 from "../../images/saffronmilk.jpg";
import saffronfood1 from "../../images/saffronfood1.jpg";
import Navbar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import { useUserContext } from "../../context/MainContext";
import SideBar from "../sidebar/SideBar";
import MenuSlider from "../sidebar/MenuSlider";
import ScrollToTop from "../ScrollToTop";

function Pregnancy() {
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

  return (
    <div className="pu_main bg-pink-400">
      <ScrollToTop />
      <Navbar />
      <SideBar />
      <MenuSlider />

      <div
        className="pu_div1"
        style={{ backgroundImage: `url(${pregnancyback})` }}
      >
        <div>
          <h2>PREGNANT WOMAN</h2>
          <p>
            Saffron is known to help improve digestion, enhance mood, and
            promote relaxation, making it a beneficial spice for pregnant women
            when used in moderation.
          </p>
        </div>
      </div>
      <div className="pu_div2 pt-10 rounded-3xl m-20 bg-pink-200">
        <h1 className="potential">POTENTIAL BENEFITS</h1>
        <div>
          <h1>Mood Regulation</h1>
          <p>
            <span className="culinary_subheadings">Saffron’s Potential: </span>
            Compounds like crocin and safranal in saffron may influence brain
            chemicals such as serotonin and dopamine, which play key roles in
            regulating mood. These compounds can promote emotional stability and
            a sense <br />
            of well-being.
          </p>
          <p>
            <span className="culinary_subheadings">The Challenge:</span>{" "}
            Pregnancy hormones like estrogen and progesterone fluctuate wildly,
            often leading to mood swings,
            <br /> anxiety, and even depression. These hormonal changes can
            affect neurotransmitter levels in the brain, impacting <br />
            mood regulation.
          </p>
        </div>

        <div>
          <h1>Digestive Support</h1>
          <p>
            <span className="culinary_subheadings">Common Concerns:</span>{" "}
            Pregnancy can cause nausea (morning sickness), indigestion,
            constipation, and bloating due to hormonal changes and pressure from
            the growing uterus. These digestive issues can be uncomfortable and
            affect overall well-being.
          </p>
          <p>
            <span className="culinary_subheadings">Saffron’s Role: </span>
            Saffron is thought to stimulate the production of digestive enzymes,
            which help break down food, and bile, which aids in fat digestion.
            This stimulation can potentially ease nausea and improve digestion,
            reducing symptoms like <br />
            bloating and constipation.
          </p>
        </div>

        <div>
          <h1>Iron Boost</h1>
          <p>
            <span className="culinary_subheadings">Why Iron Matters: </span>Iron
            is crucial for producing hemoglobin, the protein in red blood cells
            that carries oxygen throughout the body. Pregnant women need extra
            iron to support increased blood volume and supply oxygen to the
            growing baby.
          </p>
          <p>
            <span className="culinary_subheadings"></span>While saffron is not a
            primary source of iron, it does contain a small amount that can
            contribute to overall dietary
            <br /> intake. When combined with iron-rich foods like lean meats,
            legumes, and leafy greens,
            <br /> saffron can help enhance iron absorption and support
            <br /> maternal and fetal health.
          </p>
        </div>

        <div>
          <h1>Sleep Enhancement</h1>
          <p>
            <span className="culinary_subheadings">Sleep Disruptions: </span>
            Common during pregnancy due to hormonal changes, physical
            discomfort, and anxiety. Good sleep is essential for maternal health
            and fetal development.
          </p>
          <p>
            <span className="culinary_subheadings">
              Saffron’s Soothing Effect:
            </span>{" "}
            Saffron’s mild sedative properties, possibly due to its influence on
            neurotransmitters, may promote relaxation and improve sleep quality,
            helping pregnant women get the rest they need.
          </p>
        </div>
      </div>
      <div className="pu_div2">
        <h1>DOSAGE AND PRECAUTIONS</h1>
        <div>
          <h1>First Trimester Caution</h1>
          <p>
            The first trimester is a crucial period of fetal development, with
            rapid growth and organ formation.
          </p>
          <p>
            During this time, it is recommended to avoid saffron entirely or use
            it only under very close
            <br /> medical supervision, if at all, to minimize any potential
            risks.
          </p>
        </div>
        <div>
          <h1>Quality is Paramount</h1>
          <p>
            Source saffron from reputable brands with certifications to ensure
            authenticity and purity, as adulterated saffron can be harmful.
          </p>
          <p>
            Look for vibrant red threads with a slightly yellowish tip and a
            distinct, sweet aroma to identify high-quality saffron.
          </p>
        </div>
        <div>
          <h1>Personalized Guidance is Non-Negotiable</h1>
          <p>
            Always consult your doctor or a registered dietitian before adding
            saffron to your diet to ensure it’s safe for your specific
            situation.
          </p>
        </div>
      </div>
      

      {/* Usage Section */}
      <div className="max-w-6xl mx-auto my-16 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-black uppercase">Incorporating Saffron Wisely</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {[{ img: saffronmilk1, title: "Saffron Milk", desc: "Add a few strands to warm milk for a soothing drink." },
            { img: saffronfood1, title: "Culinary Uses", desc: "Enhance rice, soups, and desserts with a pinch of saffron." },
          ].map((item, index) => (
            <div key={index} className="max-w-xs p-4 bg-pink-100 rounded-lg shadow-lg text-center">
              <img src={item.img} alt={item.title} className="rounded-lg h-40 mx-auto" />
              <h2 className="text-md uppercase tracking-widest font-normal text-black mt-4">{item.title}</h2>
              <p className="text-gray-700 mt-2 text-sm tracking-wider">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Essential Reminders */}
      <div className="bg-pink-100 py-12 px-6 text-center">
        <h1 className="text-3xl font-bold text-black uppercase">Essential Reminders</h1>
        <div className="max-w-4xl mx-auto mt-6 space-y-6 text-black">
          {["Not a cure-all: Saffron should complement a healthy diet and medical care.",
            "Be observant: Discontinue use if you experience any allergic reactions.",
          ].map((reminder, index) => (
            <p key={index} className="bg-white bg-opacity-70 p-4 rounded-lg text-black tracking-widest text-sm">{reminder}</p>
          ))}
        </div>
      </div>

      <div className="pu_div5">
        <p>
          Saffron holds potential as a valuable addition to a healthy pregnancy
          when used carefully and under the guidance of a healthcare
          professional. Remember, moderation, quality sourcing, and open
          communication with your doctor are essential for safely navigating the
          use of saffron during this special time.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Pregnancy;
