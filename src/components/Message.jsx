import React from "react";

function Message(){
        return(
           <div className="message owner">
                <div className="messageInfo">
                        <img src= "/src/img/add.png"/>
                        <span> Just Now</span>
                </div>
                <div className="messageContent">
                 <img src= "/src/img/Video.png" alt="" />

                 <p>hello</p>
                 </div>
           </div>
        )
}

export default Message;