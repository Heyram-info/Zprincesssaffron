import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
import BounceLoader from "react-spinners/ClipLoader";
export const userContext = createContext({});
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state


  useEffect(() => {
    // // Fetch user profile data on mount
    // const fetchUser = async () => {
    //   try {
    //     const { data } = await axios.get('/profile');
    //     if (data && data.role) { // Ensure data has a role field
    //       setUser(data);
    //     } else {
    //       console.error("Unexpected user data format:", data);
    //     }
    //   } catch (err) {
    //     console.error("Failed to fetch user profile:", err);
    //   } finally {
    //     setLoading(false); // Set loading to false after fetch is complete
    //   }
    // };

    // fetchUser();
  const fetchUser =async ()=>{
    try {
      const token =  localStorage.getItem('token')
      const decodedToken = jwtDecode(token);

      const {email,role,id,name } = decodedToken
      setUser(decodedToken)
      console.log("tokken",decodedToken)
      console.log("user",user)
      console.log('context working....')

      

      // Extract relevant information from the token
    
      
    } catch (error) {
      
    }
    finally{
      setLoading(false)
    }
  }
  fetchUser()


  }, []); // Empty dependency array to only run on mount
  
  function logOut(){
    localStorage.removeItem('token')
    setUser(null)
    setTimeout(() => {
      navigate('/')
    }, 100);
    
   }
  if (loading) {
    return <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center",backgroundColor:"rgb(244, 237, 255)",gap:"1rem",fontSize:"2rem"}}>
      <BounceLoader />

    </div>; // Handle loading state
  }

  return (
    <userContext.Provider value={{ user, setUser, logOut }}>
      {children}
    </userContext.Provider>
  );
};
