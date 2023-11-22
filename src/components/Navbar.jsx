import React from "react";

function Navbar() {
        return(
                <div className="navbar">
                        <span className="logo">DigiChat</span>
                        <div className="user">
                          <img src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                         <span className="name">Aditya</span>
                         <button>Logout</button>
                        </div>
                </div>

        )
}

export default Navbar;