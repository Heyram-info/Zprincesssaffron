import React from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/MainContext";

function LoginHover() {
  const { showLogin, setShowLogin } = useUserContext();
  const navigate = useNavigate();

  function handleClose() {
    setShowLogin(false);
  }

  function handleMouseLeave() {
    setShowLogin(false);
  }

  // Only render if showLogin is true
  // if (!showLogin) return null;

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="fixed top-0 right-0 w-full md:w-96 h-screen bg-white/10 backdrop-blur-lg shadow-2xl transition-transform transform translate-x-0 duration-300 ease-in-out flex flex-col items-center p-6 rounded-l-3xl"
    >
      {/* Close Button */}
      <div className="self-end mb-4">
        <IoMdClose
          className="text-gray-800 text-2xl cursor-pointer hover:text-red-500 transition"
          onClick={handleClose}
        />
      </div>

      {/* Already Have an Account */}
      <div className="text-center text-white">
        <h2 className="text-xl font-semibold">ALREADY HAVE AN ACCOUNT?</h2>
        <p className="text-sm text-gray-300 mt-2">
          Log in for a personalized experience and unlock all your benefits.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-6 py-2 w-full bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          LOGIN
        </button>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-400 my-6 opacity-30"></div>

      {/* Not Registered Yet */}
      <div className="text-center text-white">
        <h2 className="text-xl font-semibold">NOT REGISTERED YET?</h2>
        <p className="text-sm text-gray-300 mt-2">
          Join us and enjoy exclusive benefits!
        </p>
        <button
          onClick={() => navigate("/register")}
          className="mt-4 px-6 py-2 w-full bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transition duration-300"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default LoginHover;
