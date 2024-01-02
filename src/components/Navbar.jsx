import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {

        //getting reatime image that user selected-image to show
        const {currentUser} = useContext(AuthContext)
        return(
                <div className="navbar">
                        <span className="logo">DigiChat</span>
                        <div className="user">
                          <img src={currentUser.photoURL} alt=""/>
                         <span className={currentUser.displayName}>Aditya</span>
                         <button onClick={() => signOut(auth)}>Logout</button>
                        </div>
                </div>

        )
}

export default Navbar;
