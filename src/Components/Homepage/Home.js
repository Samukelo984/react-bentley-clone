import "./Home.css"; 
import React from "react";
import {Route} from "react-router-dom"; 
import Navbar from "../Navbar/Navbar";
import BgImages from "../BackgroundImages/BgImages";
import ImageSlider from "../BackgroundImages/ImageSlider"; 
import HomeTitles from "../HomeTitles/HomeTitles";

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
          <HomeTitles />  
        </Route>

         
    </div>
  )
};     

export default Home; 