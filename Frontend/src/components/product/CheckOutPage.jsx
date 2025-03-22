import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../context/UserContext";
import ProgressBar from "./ProgressBar";
import "../../styles/CheckoutPage.css"; // Import the CSS file
import Navbar from "../../navbar/NavBar";
import SideBar from "../sidebar/SideBar";
import MenuSlider from "../sidebar/MenuSlider";
import Footer from "../../footer/Footer";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import ScrollToTop from "../ScrollToTop";

const CheckoutPage = () => {
  const { cartItems, removeItem, updateQuantity } = useContext(CartContext);
  const { user } = useContext(userContext);
  const [progressStep, setProgressStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    mobile: "",
    landmark: "",
    shipmentId: "",
  });
  const [orderID, setOrderID] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const totalPrice = calculateTotalPrice();
      const orderData = {
        shippingDetails,
        items: cartItems.map((item) => ({
          variantId: item.variantId,
          productId: item.productId,
          weight: item.weight,
          quantity: item.quantity,
          price: item.price,
          name: item.name,
        })),
        total: totalPrice,
        user: user,
      };

      console.log(orderData);
      const response = await axios.post("/orders", orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 && response.data && response.data._id) {
        setOrderID(response.data._id);
        setProgressStep(2); // Move to the next step in the progress bar
        navigate("/payment", {
          state: { orderID: response.data._id, cartItems },
        });
      } else {
        throw new Error("Failed to place order");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error placing order:", error);
    }
  };

  const handleIncrement = (id, weight) => {
    updateQuantity(id, weight, 1);
  };

  const handleDecrement = (id, weight) => {
    updateQuantity(id, weight, -1);
  };

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculate Total including delivery fee
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;
  const handleRemoveItem = (item) => {
    removeItem(item._id, item.weight); // Pass both id and weight
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <SideBar />
      <MenuSlider />
      <div className="checkout_main">
        <div className="ckeckout_div1">
          <div className="ckeckout_div2">
            <div className="ckeckout_div21">
              <div className="ckeckout_div211">
                <div>
                  <h1>Checkout</h1>
                </div>
                <div>
                  <h2>Shipping Info</h2>
                </div>
                <div className="checkout_forms text-xs text-semibold">
                  <div className="checkout_single_form">
                    <label htmlFor="">Name:</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={shippingDetails.name}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                  </div>
                  <div className="checkout_single_form">
                    <label htmlFor="">Address:</label>
                    <textarea
                      id="address"
                      type="text"
                      name="address"
                      value={shippingDetails.address}
                      onChange={handleChange}
                      required
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="checkout_row_form">
                    <div className="checkout_single_form">
                      <label htmlFor="">Landmark:</label>
                      <input
                        id="landmark"
                        type="text"
                        name="landmark"
                        value={shippingDetails.landmark}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="checkout_single_form">
                      <label htmlFor="">ZIPcode:</label>
                      <input
                        id="zip"
                        type="text"
                        name="zip"
                        value={shippingDetails.zip}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="checkout_row_form">
                    <div className="checkout_single_form">
                      <label htmlFor="">City:</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={shippingDetails.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="checkout_single_form">
                      <label htmlFor="">Mobile:</label>
                      <input
                        id="mobile"
                        type="tel"
                        name="mobile"
                        value={shippingDetails.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="checkout_row_form">
                    <div className="checkout_single_form">
                      <label htmlFor="">State:</label>
                      <input
                        id="state"
                        type="text"
                        name="state"
                        value={shippingDetails.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="checkout_single_form">
                      <label htmlFor="">Country:</label>
                      <input
                        id="country"
                        type="text"
                        name="country"
                        value={shippingDetails.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="checkout_submit_button">
                    <button onClick={handleSubmit}>SUBMIT</button>
                  </div>
                </div>
              </div>
              <div className="ckeckout_div212">
                <div>
                  <div className="checkout_summary">
                    <h1>ORDER SUMMARY</h1>
                  </div>
                  <div className="checkoutpage_div text-xs text-semibold">
                    {console.log(cartItems)}
                    {cartItems.map((item) => (
                      <div className="checkout_cartitems" id={item._id}>
                        <div className="checkout_cartitems1">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="checkout_cartitems2">
                          <h2>{item.name}</h2>
                          <h3>{item.weight} Grams</h3>
                          <h4>₹ {item.price * item.quantity}</h4>
                          <button onClick={() => handleRemoveItem(item)}>
                            REMOVE
                          </button>
                        </div>
                        <div className="checkout_cartitems3">
                          <div className="checkout_cartitems31 overflow-hidden">
                            <button
                              onClick={() =>
                                handleDecrement(item._id, item.weight)
                              }
                            >
                              <FaMinus />
                            </button>{" "}
                            {item.quantity}
                            <button
                              onClick={() =>
                                handleIncrement(item._id, item.weight)
                              }
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="checkout_price">
                    <div>
                      <h2>Subtotal</h2> <h3>₹{subtotal.toFixed(2)}</h3>
                    </div>
                    <div>
                      <h2>Shipping</h2> <h3>₹{deliveryFee.toFixed(2)}</h3>
                    </div>
                  </div>
                  <div className="checkout_total">
                    <div>
                      <h2>ORDER TOTAL</h2> <h3>₹{total.toFixed(2)}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
