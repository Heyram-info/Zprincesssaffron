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
import CulinaryUse from "./components/goldenexilir/CulinaryUse";
import MedicinalUse from "./components/goldenexilir/MedicinalUse";
import Beauty from "./components/goldenexilir/Beauty";
import Pregnancy from "./components/goldenexilir/Pregnancy";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { AnalyticsProvider } from "./components/Admin/analytics/context/AnalyticsContext.jsx";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProductedRoute";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import DefaultDashboard from "./components/Admin/DefaultDashboard.jsx";
import UserOrders from "./components/Admin/UserOrders.jsx";
import WholesalerOrders from "./components/Admin/WholesalerOrders.jsx";
import TelecallerOrders from "./components/Admin/TelecallerOrders.jsx";
import ProductList from "./components/Admin/ProductList.jsx";
import AllUsers from "./components/Admin/AllUsers.jsx";
import AllWholesalers from "./components/Admin/AllWholesalers.jsx";
import AllMarketers from "./components/Admin/AllMarketers.jsx";
import Analytics from "./components/Admin/analytics/Analytics.jsx";
import AdminProfile from "./components/Admin/AdminProfile.jsx";
import AdminSetting from "./components/Admin/AdminSetting.jsx";
import TeleCallerDash from "./components/Telecaller/TeleCallerDash.jsx";
import TelecallerSidebar from "./components/Telecaller/TelecallerSidebar.jsx";
import MarketerForm from "./pages/MarketerForm";
import MarketerDashboard from "./components/marketer/MarketerDashboard";
import RegisterWholesaler from "./components/WholeSaler/RegisterWholesaler";
import DashboardLayout from "./components/UserDashboard/DashboardLayout";
import Profile from "./components/UserDashboard/Profile";
import Orders from "./components/UserDashboard/Orders";
import OrderTracking from "./components/order/OrderTracking";
import Settings from "./components/UserDashboard/Settings";
import History from "./components/UserDashboard/History";
import Register from "./components/login/Register";
import LoginPagee from "./components/login/LoginPagee";
import ForgotPasswordPage from "./components/login/ForgotPasswordPage.jsx";
import ForbiddenPage from "./components/ProtectedRoute/ForbiddenPage";
import ProductSection from "./components/product/ProductSection";
import Chatbot from "./components/Chatbot/ChatBot";
import CheckoutPage from "./components/product/CheckOutPage";
import PaymentPage from "./components/payment/PaymentPage";
import PaymentSuccessPage from "./components/payment/PaymentSuccessPage";
import ProductPage from "./components/product/ProductPage";
import SingleProduct from "./components/product/SingleProduct";
import CardProduct from "./components/product/CardProduct";
import CustomerReviewKashmir from "./components/review/CustomerReviewKashmir";
import CustomerReviewSpain from "./components/review/CustomerReviewSpain";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  return (
    <>
      <UserProvider>
        <AnalyticsProvider>
          <UserContextProvider>
            <ParallaxProvider>
              <CartProvider>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable={false}
                  pauseOnHover
                  theme="dark"
                  transition={Bounce}
                />
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/products" element={<Home />} />
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
                  <Route
                    path="/kashmiri-saffron"
                    element={<KashmiriSaffron />}
                  />
                  <Route path="/spain-saffron" element={<SpainSaffron />} />

                  <Route path="/choose-us" element={<ChooseUs />} />

                  <Route path="/culinary-use" element={<CulinaryUse />} />
                  <Route path="/medicine-use" element={<MedicinalUse />} />
                  <Route path="/beauty-use" element={<Beauty />} />
                  <Route path="/pregnancy-use" element={<Pregnancy />} />

                  <Route path="/productpage" element={<ProductPage />} />
                  <Route path="/singleproduct" element={<SingleProduct />} />
                  <Route path="/card-product" element={<CardProduct />} />
                  <Route
                    path="/customer-review-kashmirsaffron"
                    element={<CustomerReviewKashmir />}
                  />
                  <Route
                    path="/customer-review-spainsaffron"
                    element={<CustomerReviewSpain />}
                  />
                  <Route path="/product/:id" element={<ProductDetails />} />

                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<LoginPagee />} />
                  <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                  />
                  <Route path="/403" element={<ForbiddenPage />} />
                  <Route
                    path="/product/:id"
                    element={
                      // <ProtectedRoute allowedRoles={["user", "wholesaler", "admin"]}>
                      <ProductSection />
                      // {/* </ProtectedRoute>  */}
                    }
                  />
                  <Route
                    path="/chatbot"
                    element={
                      <ProtectedRoute
                        allowedRoles={["user", "wholesaler", "admin"]}
                      >
                        <Chatbot />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/checkout"
                    element={
                      <ProtectedRoute allowedRoles={["user", "wholesaler"]}>
                        <CheckoutPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/payment"
                    element={
                      <ProtectedRoute allowedRoles={["user", "wholesaler"]}>
                        <PaymentPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/payment-success"
                    element={
                      <ProtectedRoute allowedRoles={["user", "wholesaler"]}>
                        <PaymentSuccessPage />
                      </ProtectedRoute>
                    }
                  />

                  {/* userDashboard */}
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute allowedRoles={["user", "wholesaler"]}>
                        <DashboardLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route
                      path="profile"
                      element={
                        <ProtectedRoute allowedRoles={["user", "wholesaler"]}>
                          <Profile />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="orders"
                      element={
                        <ProtectedRoute allowedRoles={["user", "wholesaler"]}>
                          <Orders />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="track-order/:id"
                      element={
                        <ProtectedRoute allowedRoles={["user", "wholesaler"]}>
                          <OrderTracking />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="history/:userId"
                      element={
                        <ProtectedRoute allowedRoles={["user", "wholesaler"]}>
                          <History />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="settings"
                      element={
                        <ProtectedRoute allowedRoles={["user", "wholesaler"]}>
                          <Settings />
                        </ProtectedRoute>
                      }
                    />
                  </Route>

                  {/* Admin */}
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute allowedRoles={["user"]}>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  >
                    <Route path="dashboard" element={<DefaultDashboard />} />
                    <Route path="user-orders" element={<UserOrders />} />
                    <Route
                      path="wholesaler-orders"
                      element={<WholesalerOrders />}
                    />
                    <Route
                      path="telecaller-orders"
                      element={<TelecallerOrders />}
                    />
                    <Route path="all-products" element={<ProductList />} />
                    <Route path="all-users" element={<AllUsers />} />
                    <Route path="all-marketers" element={<AllMarketers />} />
                    <Route
                      path="all-wholesalers"
                      element={<AllWholesalers />}
                    />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="profile" element={<AdminProfile />} />
                    <Route path="settings" element={<AdminSetting />} />
                  </Route>

                  <Route
                    path="/telecaller-dashboard"
                    element={
                      <ProtectedRoute allowedRoles={["telecaller"]}>
                        <TeleCallerDash />
                      </ProtectedRoute>
                    }
                  >
                    <Route path="shipment" element={<TelecallerSidebar />} />
                  </Route>
                  <Route
                    path="/register-marketer"
                    element={
                      <ProtectedRoute allowedRoles={["admin"]}>
                        <MarketerForm />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/marketer-dashboard/:id"
                    element={
                      <ProtectedRoute allowedRoles={["marketer"]}>
                        <MarketerDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/register-wholesaler/:id"
                    element={
                      <ProtectedRoute allowedRoles={["marketer"]}>
                        <RegisterWholesaler />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </CartProvider>
            </ParallaxProvider>
          </UserContextProvider>
        </AnalyticsProvider>
      </UserProvider>
    </>
  );
}

export default App;
