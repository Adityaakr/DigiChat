import React from "react";
import Work from "/home/aditya/Desktop/Chat App/youtube2022/src/img/Work.png"

const Login = () => {
        return (
          <div className="FormContainer">
              <div className="FormWrapper">
              <span className="logo">DigiChat</span>
              <span className="title">Login</span>
      
      
              <form>
              <input placeholder = "email"/>
              <input placeholder = "Password"/>
              <button>Sign in</button>
              </form>
              <p>You don't have an Account? Register</p>
              
              </div>
          </div>
        )
      }
export default Login