// Register.jsx

import React, { useState } from "react";
import Work from "/src/img/Work.png";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, storage } from "./firebase";
import {
          getDownloadURL,
          ref,
          uploadBytesResumable, 
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { db } from "./firebase";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create user with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Upload file to storage
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.error("Error during file upload:", error);
          setErr(true);
        },
        async () => {
          // Get download URL of the uploaded file
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Update user profile with display name and photo URL
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });
          // Save user data to Firestore
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          // Create a placeholder document in userChats
          await setDoc(doc(db, "userChats", res.user.uid), {});

          // Navigate to the home page
          navigate("/");
        }
      );
    } catch (error) {
      console.error("Error during registration:", error.code, error.message);
      setErr(true);
    }
  };

  return (
    <div className="FormContainer">
      <div className="FormWrapper">
        <span className="logo">DigiChat</span>
        <span className="title">Register</span>

        <form onSubmit={handleSubmit}>
          <input placeholder="display name" />
          <input placeholder="email" />
          <input placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" className="items-center">
            <img src={Work} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button> Sign Up</button>
          {err && <span>Register then Go to Login page & Login!</span>}
        </form>
        <p>
          You already have an Account? <u><Link to="/login">Login</Link></u>
        </p>
      </div>
    </div>
  );
};

export default Register;
