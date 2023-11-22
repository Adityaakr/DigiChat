import React from "react";
import add from "/src/img/add.png"
import add1 from "/src/img/add1.png"
import Video from "/src/img/Video.png"
import Messages from "./Messages.jsx";
import Input from "./Input.jsx";

//37.01 minutes over

function Chat() {
        return(
                <div className="chat">
                 <div className="chatInfo">
                        <span>Aditya</span>
                        <div className="chatIcons">
                          <img src={add} alt="" />
                          <img src={add1} alt="" />
                          <img src={Video} alt="" />
                        </div>
                 </div>
                 <Messages/>
                 <Input/>
                </div>

        )
}

export default Chat