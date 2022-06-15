import "./Home.css"; 
import React from "react";
import {Route} from "react-router-dom"; 
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
        <Route>
          <Navbar /> 
        </Route>
    </div>
  )
};     

export default Home; 