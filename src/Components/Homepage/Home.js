import "./Home.css"; 
import React from "react";
import {Route} from "react-router-dom"; 
import Navbar from "../Navbar/Navbar";
import BgImages from "../BackgroundImages/BgImages";
import ImageSlider from "../BackgroundImages/ImageSlider"; 
import HomeAnchors from "../HomeAnchors/HomeAnchors";
 
const Home = () => {
  return (
    <div>
        <Route>
          <Navbar/> 
        </Route>

        <Route>
          <BgImages slides={ImageSlider} />  
        </Route>

        <Route>
          <HomeAnchors /> 
        </Route> 

          
    </div>
  )
};     

export default Home; 