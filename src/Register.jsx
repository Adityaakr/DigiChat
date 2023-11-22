import React from "react";
import Work from "/src/img/Work.png"

const Register = () => {
  return (
    <div className="FormContainer">
        <div className="FormWrapper">
        <span className="logo">DigiChat</span>
        <span className="title">Register</span>


        <form>
        <input placeholder = "Username"/>
        <input placeholder = "email"/>
        <input placeholder = "Password"/>
        <input style={{display:"none"}} type = "file" id="file"/>
        <label htmlFor='file' className="items-center">
        <img src ={Work} alt=""/>
        <span>Add an Avatar</span>
        </label>
        <button>Sign Up</button>
        </form>
        <p>You already have an Account? Login</p>
        
        </div>
    </div>
  )
}
export default Register;