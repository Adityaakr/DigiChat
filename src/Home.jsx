import React from "react";
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"
import Navbar from "./components/Navbar";

function Home(){
        return(
               <div className="Home">
                <div className="container">
                        <Sidebar/>
                        <Chat/>
                </div>
               </div>
        )
}

export default Home;