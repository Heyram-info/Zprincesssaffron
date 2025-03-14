import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/HomePage/About";
import MainPage from "./components/HomePage/MainPage";
import Cart from "./components/cart/Cart";
import { UserContextProvider } from "./context/UserContext";
import { UserProvider } from "./context/MainContext";
import { CartProvider } from "./context/CartContext";
import ContactUs from "./contactus/ContactUs";
import TermsAndConditions from "./termsandcondition/TermsAndConditions";
import PrivacyPolicy from "./privacypolicy/PrivacyPolicy";
import CancellationAndRefundPolicy from "./CancellationAndRefundPolicy/CancellationAndRefundPolicy";
import ShippingAndDeliveryPolicy from "./shippingAndDeliveryPolicy/ShippingAndDeliveryPolicy";
import Faq from "./Faq/Faq";
import Insight from "./insight/Insight";
import KashmiriSaffron from "./insight/KashmiriSaffron";
import SpainSaffron from "./insight/SpainSaffron";
import { ParallaxProvider } from "react-scroll-parallax";
import ChooseUs from "./components/ChooseUs";
import CulinaryUse from "./components/goldenexilir/CulinaryUse"
import MedicinalUse from "./components/goldenexilir/MedicinalUse"
import Beauty from "./components/goldenexilir/Beauty"
import Pregnancy from "./components/goldenexilir/Pregnancy"

function App() {
  return (
    <>
      <UserProvider>
        <UserContextProvider>
          <ParallaxProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route
                  path="/termsandcondition"
                  element={<TermsAndConditions />}
                />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route
                  path="/cancellation-and-refund"
                  element={<CancellationAndRefundPolicy />}
                />
                <Route
                  path="/shipping-and-delivery"
                  element={<ShippingAndDeliveryPolicy />}
                />
                <Route path="/faq" element={<Faq />} />

                <Route path="/insight" element={<Insight />} />
                <Route path="/kashmiri-saffron" element={<KashmiriSaffron />} />
                <Route path="/spain-saffron" element={<SpainSaffron />} />

                <Route path="/choose-us" element={<ChooseUs />} />

                <Route path="/culinary-use" element={<CulinaryUse />} />
                <Route path="/medicine-use" element={<MedicinalUse />} />
                <Route path="/beauty-use" element={<Beauty />} />
                <Route path="/pregnancy-use" element={<Pregnancy />} />
              </Routes>
            </CartProvider>
          </ParallaxProvider>
        </UserContextProvider>
      </UserProvider>
    </>
  );
}

export default App;
