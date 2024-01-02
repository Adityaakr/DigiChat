import React, { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";



const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const email = e.target[0].value;
    const password = e.target[1].value;
  

//this is for login page ok so when user will enter correct user and password he/she will be loged in
// when user is registered he needs to login for chat ok

    try {
      //authenticating user email and password on login page
     await signInWithEmailAndPassword(auth, email, password)
     navigate("/");
    } catch (error) {
      setErr(true);
    }
  };

        return (
          <div className="FormContainer">
              <div className="FormWrapper">
              <span className="logo">DigiChat</span>
              <span className="title">Login</span>
              <form onSubmit={handleSubmit}>
              <input type="email" placeholder = "email"/>
              <input type="password" placeholder = "Password"/>
              <button>Sign in</button>
              {err && <span>Oops! Something went Wrong!</span>}
              </form>
              <p>You don't have an Account? <u><Link to="/register">Register</Link></u></p>
              
              </div>
          </div>
        )
      }
export default Login
