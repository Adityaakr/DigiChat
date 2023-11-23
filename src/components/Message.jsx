import React from "react";
import add from "/src/img/add.png"
import Video from "/src/img/pic.png"

function Message(){
        return(
           <div className="message owner">
                <div className="messageInfo">
                        <img src= {add}/>
                        <span> Just Now</span>
                </div>
                <div className="messageContent">
                 <img src= {Video} alt="" />

                 <p>hello</p>
                 </div>
           </div>
        )
}

export default Message;
