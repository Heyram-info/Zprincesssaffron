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

function App() {
  return (
    <>
      <UserProvider>
        <UserContextProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/about-us" element={<About />} />
              <Route path="/cart" element={<Cart/>} />
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
            </Routes>
          </CartProvider>
        </UserContextProvider>
      </UserProvider>
    </>
  );
}

export default App;
