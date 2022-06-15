import "./Home.css"; 
import React from "react";

const Home = () => {
  return (
    <div>
        <div className="navbar">
          <div className="logo">
            <a href=""> 
            <img 
            src="https://www.bentleymotors.com/etc.clientlibs/bentley/clientlibs/bentley.motors.apps.base/resources/img/bentley_logo_a-c1@2x.png" 
            /> 
            </a>
          </div> 


          <div className="more-info-center">
            <div className="models">
              <span id="nav-text-one">MODELS</span>
              <ul></ul>
               </div>

            <div className="world-ob">
              <span id="nav-text-one">WORLD OF BENTLEY</span>
              <ul></ul>
               </div>

            </div> 


          <div className="more-info-right">
            <a id="nav-text-two" href=""> CONFIGURATOR </a>
            <a id="nav-text-two" href=""> LOACATE DEALER</a> 
          </div>
        </div>
    </div>
  )
};    

export default Home; 