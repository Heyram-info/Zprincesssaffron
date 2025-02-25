import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/MainContext';

function LoginHover() {
    const { showLogin, setShowLogin } = useUserContext();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (showLogin) {
            setVisible(true);
        } else {
            setTimeout(() => setVisible(false), 300);
        }
    }, [showLogin]);

    function handleClose() {
        setShowLogin(false);
    }

    function handleMouseLeave() {
        setShowLogin(false);
    }

    return (
        visible && (
            <div className={`fixed top-[10vh] right-[5vw] w-[16vw] md:w-[30vw] bg-white bg-opacity-40 backdrop-blur-lg shadow-2xl rounded-2xl z-20 transition-transform duration-500 ${showLogin ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} 
            // onMouseLeave={handleMouseLeave}
            >
                <div className="flex justify-end">
                    <IoMdClose size={23} onClick={handleClose} className="cursor-pointer p-1 rounded-bl-lg bg-white text-gray-800 hover:text-gray-900 transition-all text-lg" />
                </div>
                <div className="flex flex-col items-center justify-center mb-7 mt-10 py-5 bg-gray-200 bg-opacity-60 rounded-t-2xl">
                    <div className="text-base font-medium tracking-wider text-center text-gray-900">ALREADY HAVE AN ACCOUNT?</div>
                    <p className="text-sm font-medium text-center text-gray-900 w-[90%] mt-2 mb-5 leading-[18px]">
                        Log in for a personalised experience and benefit from all your advantages and offers.
                    </p>
                    <button onClick={() => navigate('/login')} className="text-sm tracking-widest px-10 py-2 bg-black text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl active:scale-95">
                        LOGIN
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center mt-7 mb-10 py-5 bg-gray-200 bg-opacity-60 rounded-b-2xl">
                    <div className="text-base font-medium text-center text-gray-900">NOT REGISTERED YET?</div>
                    <p className="text-sm font-medium text-center text-gray-900 w-[90%] mt-1 mb-3">
                        Join and take advantage of exclusive benefits!
                    </p>
                    <button onClick={() => navigate('/register')} className="text-sm tracking-widest px-10 py-2 bg-white text-gray-900 border border-gray-500 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-300 hover:shadow-xl active:scale-97">
                        REGISTER
                    </button>
                </div>
            </div>
        )
    );
}

export default LoginHover;
