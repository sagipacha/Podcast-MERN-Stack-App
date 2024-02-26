import React, { useState, useContext } from "react";
import Axios from "axios";
import SignUp from "../components/AuthenticationCo/SignUp/SignUp";
import { UserContext } from "../Context/User";
import { useNavigate } from "react-router-dom";
import LogIn from "../components/AuthenticationCo/LogIn/LogIn";

export default function Authentication() {
  const [logOrSign, setlogOrSign] = useState(false);
  const { setUser } = useContext(UserContext); 
  const [userdata, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const urlLogIn = "http://localhost:1754/api/v1/users/login";
  const urlRegister = "http://localhost:1754/api/v1/users/register";

  const handleChange = (e) => {
    const newData = { ...userdata };
    newData[e.target.name] = e.target.value;
    setUserData(newData);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(urlLogIn, {
        email: userdata.email,
        password: userdata.password,
      });
      setUser(response.data.user);
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("Token saved to local storage:", token);
      // console.log(response.data.user);
      // Navigate to the home page
      navigate("/Home");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Email or password are incorrect");
        // Provide feedback to the user (e.g., display an error message)
      } else {
        console.error("Error logging in:", error);
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(urlRegister, {
        fullName: userdata.fullName,
        email: userdata.email,
        password: userdata.password,
        role: !userdata.role ? "guest" : userdata.role,
      });
      setUser(response.data.user);
      const token = response.data.token;
      localStorage.setItem("token", token);
      // Navigate to the home page
      navigate("/LogIn");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div>
      <>
        {!logOrSign ? (
          <>
            <SignUp handleSubmit={handleRegister} handleChange={handleChange} />
            <p>Have an account?</p>
            <p className="login-signup" onClick={() => setlogOrSign(!logOrSign)}>
              Log in
            </p>
          </>
        ) : (
          <>
            <LogIn handleSubmit={handleLogIn} handleChange={handleChange} />
            <p>Don't have an account? </p>
            <p className="login-signup" onClick={() => setlogOrSign(!logOrSign)}>
              Sign up
            </p>
          </>
        )}
      </>
    </div>
  );
}






//   const [logOrSign, setlogOrSign] = useState(false);
//   const { user, setUser } = useContext(UserContext);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token"); 

//   const logInUrl = "http://localhost:1754/api/v1/users/login";
//   const signUpUrl = "http://localhost:1754/api/v1/users/register";

//   useEffect(() => {
//     if (token) {
      
//       navigate("/home"); 
//     }
//   }, [token, navigate]); 

//   const handleLogIn = async (userData) => {
//     try {
//       const response = await Axios.post(logInUrl, {
//         email: userData.email,
//         password: userData.password,
//       });
//       setUser(response.data.user);
//       const token = response.data.token;
//       localStorage.setItem("token", token); 
//       navigate("/home");
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         console.error("Email or password are incorrect");
//       } else {
//         console.error("Error logging in:", error);
//       }
//     }
//   };

//   const handleRegister = async (userData) => {
//     try {
//       const response = await Axios.post(signUpUrl, {
//         fullName: userData.fullName,
//         email: userData.email,
//         password: userData.password,
//         role: userData.role || "guest", 
//       });
//       setUser(response.data.user);
//       const token = response.data.token;
//       localStorage.setItem("token", token); 
//       navigate("/home");
//     } catch (error) {
//       console.error("Error registering user:", error);
//     }
//   };

//   const handleSignOut = () => {
//     localStorage.removeItem("token"); 
//     setUser(null); 
//     navigate("/welcome"); 
//   };

//   return (
//     <div>
//       {user ? (
//         <>
//           <p>Welcome, {user.fullName}!</p>
//           <button onClick={handleSignOut}>Sign Out</button>
//         </>
//       ) : (
//         <>
//           {!logOrSign ? (
//             <>
//               <SignUp handleSubmit={handleRegister} />
//               <p>Have an account?</p>
//               <p className="login-signup" onClick={() => setlogOrSign(!logOrSign)}>
//                 Log in
//               </p>
//             </>
//           ) : (
//             <>
//               <LogIn handleSubmit={handleLogIn} />
//               <p>Don't have an account?</p>
//               <p className="login-signup" onClick={() => setlogOrSign(!logOrSign)}>
//                 Sign up
//               </p>
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
