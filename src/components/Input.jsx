import React from "react";
import pic from "/src/img/pic.png"
import images from "/src/img/images.png"

function Input(){
        return(
           <div className="input">
                <input type="text" placeholder="Type something ...."/>
                <div className="send">
                        <img src= {pic} alt=""/>
                        <input type = "file" style={{display: "none"}} id="file"/>
                        <label htmlFor="file">
                                <img src={images} alt="" />
                        </label>
                        <button>Send</button>
           </div>
           </div>
        )
}

export default Input;