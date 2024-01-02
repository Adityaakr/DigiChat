import React, { useContext, useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../Context/AuthContext.jsx";
import { db } from "../firebase.js";

function Chats() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // Ensure currentUser and db are defined before proceeding
    if (!currentUser || !currentUser.uid || !db) return;

    const unsubscribe = onSnapshot(
      doc(db, "userChats", currentUser.uid),
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const userInfo = docSnapshot.data().userInfo;
          if (userInfo) { // Handle potential missing userInfo
            setChats(userInfo);
          } else {
            console.warn("userInfo field missing in userChats document");
          }
        } else {
          setChats([]);
        }
      },
      (error) => {
        console.error("Error fetching chats:", error);
      }
    );

    return () => unsubscribe();
  }, [currentUser.uid, db]); // Include db in dependencies

  return (
    <div className="chats">
      {chats?.map((chat) => (
        <div className="userChat" key={chat.id}>
          <img src={chat.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat.displayName}</span>
            <p>{chat.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chats;
