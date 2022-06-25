import "./Home.css"; 
import React from "react";
import {Route} from "react-router-dom"; 
import Navbar from "../Navbar/Navbar";
import BgImages from "../BackgroundImages/BgImages";

const Home = () => {
  return (
    <div>
        <Route>
          <Navbar/> 
        </Route>

        <Route>
          <BgImages /> 
        </Route>

         
    </div>
  )
};     

export default Home; 