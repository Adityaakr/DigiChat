import React from "react";

function Search() {
        return(
                <div className="search">
                <div className="searchForm">
                 <input type="text" placeholder="Search User"/>
                </div>
                <div className="userChat">
               <img src="https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="userChatInfo">
                <span>You</span>
                </div>
                </div>
                </div>

        )
}

export default Search