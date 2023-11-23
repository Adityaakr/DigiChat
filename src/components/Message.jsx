import React from "react";

function Message(){
        return(
           <div className="message owner">
                <div className="messageInfo">
                        <img src= "add.png"/>
                        <span> Just Now</span>
                </div>
                <div className="messageContent">
                 <img src= "Video.png" alt="" />

                 <p>hello</p>
                 </div>
           </div>
        )
}

export default Message;
