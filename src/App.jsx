import React from "react";
import Register from "./Register.jsx";
import "./Style.scss";
import Login from "./Login.jsx";
import Home from "./Home.jsx"
import { AuthContext } from "./AuthContext.jsx"
import {
        BrowserRouter,
        Routes,
        Route,
        Navigate,
} from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext.jsx";

function App() {

        const {currentUser} =  useContext(AuthContext)


        //to make something if there is no currentuser return to login

        const ProtectedRoute = ({children}) => {
                if(!currentUser){
                      return <Navigate to = "/login"/>;

                }
                return children;
        };

        console.log(currentUser);
        return(
               <BrowserRouter>
               <Routes>
                    <Route path="/">
                        <Route 
                        index 
                        element={
                        
                        <ProtectedRoute>
                         <Home /> 
                        </ProtectedRoute>
                    } 
                />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
               </Routes>
               </BrowserRouter>
        )
}

export default App;

