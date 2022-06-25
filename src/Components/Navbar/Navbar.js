import React from "react"; 
import "./Navbar.css"; 

import {FiChevronDown, FiChevronLeft, FiChevronRight} from "react-icons/fi"; 
 
const Navbar = () => {
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
              <span id="nav-text-one">MODELS
              <i> <FiChevronDown /> </i>  
              </span>
            
              <ul className="model-range">

                <div className="nav-lists">

                    {/* BENTAYGA WEB RANGE */}
                <li className="list-item">
                    THE BENTAYGA EWB RANGE <FiChevronRight />
                    <li className="inner-list-item">BENTAYGA EWB AZURE</li>
                    <li className="inner-list-item">BENTAYGA EWB </li> 
                </li>  
                </div>

                {/* BENTAYGA RANGE */}
                <div className="nav-lists">
                    
                    <li className="list-item">
                        THE BENTAYGA RANGE <FiChevronRight />
                        <li className="inner-list-item">BENTAYGA SPEED</li>
                        <li className="inner-list-item">BENTAYGA S </li> 
                        <li className="inner-list-item">BENTAYGA AZURE </li> 
                        <li className="inner-list-item">BENTAYGA  </li> 
                    </li>  
                    </div>

                    {/* THE FLYING SPUR RANGE */}
                    <div className="nav-lists">
                    
                    <li className="list-item">
                        THE FLYING SPUR RANGE <FiChevronRight />
                        <li className="inner-list-item">FLYING SPUR MULLINER</li>
                        <li className="inner-list-item">FLYING SPUR S </li> 
                        <li className="inner-list-item">FLYING SPUR AZURE </li> 
                        <li className="inner-list-item">FLYING SPUR </li> 
                    </li>  
                    </div>

                    {/* THE CONTINENTAL GT RANGE */}
                    <div className="nav-lists">
                    
                    <li className="list-item">
                        THE CONTINENTAL GT RANGE <FiChevronRight />
                        <li className="inner-list-item">CONTINENTAL GT MULLINER</li>
                        <li className="inner-list-item">CONTINENTAL GT SPEED </li> 
                        <li className="inner-list-item">CONTINENTAL GT S </li> 
                        <li className="inner-list-item">CONTINENTAL GT AZURE </li> 
                        <li className="inner-list-item">CONTINENTAL GT </li> 
                    </li>  
                    </div>

                    {/* THE CONTINENTAL GTC RANGE */}
                    <div className="nav-lists">
                    
                    <li className="list-item">
                        THE CONTINENTAL GTC RANGE <FiChevronRight />
                        <li className="inner-list-item">CONTINENTAL GTC MULLINER</li>
                        <li className="inner-list-item">CONTINENTAL GTC SPEED </li> 
                        <li className="inner-list-item">CONTINENTAL GTC S </li> 
                        <li className="inner-list-item">CONTINENTAL GTC AZURE </li> 
                        <li className="inner-list-item">CONTINENTAL GTC </li> 
                    </li>  
                    </div>

                    {/* MULLINER */}
                    <div className="nav-lists">
                    
                    <li className="list-item">
                        MULLINER <FiChevronRight />
                        <li className="inner-list-item">COLLECTIONS</li>
                        <li className="inner-list-item">COACHBUILT</li> 
                        <li className="inner-list-item">CLASSIC</li> 
                        <li className="inner-list-item">THE LEGEND OF MULLINER</li> 
                    </li>  
                    </div>

                    <div className="nav-lists">
                    
                    <li className="list-item">
                     <FiChevronRight /> PRE-OWNED 
                    </li>  
                    </div>

                    <div className="nav-lists">
                    
                    <li className="list-item">
                        PAST MODELS<FiChevronRight />
                        <li className="inner-list-item">MULSANNE (2010-2020)</li>
                        <li className="inner-list-item">CONTINENTAL(2003-2018)</li> 
                        <li className="inner-list-item">BENTAYGA (2015-2020)</li>
                        <li className="inner-list-item">FLYING SPUR (2005-2018)</li>
                        <li className="inner-list-item">THE ARANGE RANGE</li>
                        <li className="inner-list-item">THE AZURE</li>
                        <li className="inner-list-item">BENTLEY BROOKLANDS </li>
                    </li>  
                    </div>

              </ul>

               </div> 

            <div className="world-ob"> 

              <span id="nav-text-one">WORLD OF BENTLEY 
              <i>  <FiChevronDown /> </i>  
              </span>

              <ul className="wob-range">

              <div className="nav-lists">

                {/* NEWS */}
                <li className="list-item">
                   NEWS  <FiChevronRight />
                     <li className="inner-list-item">2022 NEWS</li>
                    <li className="inner-list-item">2021 NEWS </li> 
                    <li className="inner-list-item">2020 NEWS </li> 
                    <li className="inner-list-item">2019 NEWS </li> 
                    <li className="inner-list-item">2018 NEWS </li> 
                    <li className="inner-list-item">2017 NEWS </li> 
                   </li>  
                 </div>

                 <div className="nav-lists">

                {/* BEYOND 100 */}
                <li className="list-item">
                   BEYOND 100  <FiChevronRight />
                     <li className="inner-list-item">TOMORROW AND BEYOND</li>
                    <li className="inner-list-item">BENTLEY AND THE MACALLAN: A SUSTAINABILITY JOURNEY </li> 
                    <li className="inner-list-item">EXP 100 GT CONCEPT </li> 
                    <li className="inner-list-item">BENTLEY BRAND MANIFESTO </li> 
                    <li className="inner-list-item">COMING THIS WAY: THE ELECTRIC BENTLEY </li> 
                   </li>  
                 </div>

                 <div className="nav-lists">

                {/* THE BENTLEY STORY */}
                <li className="list-item">
                   THE BENTLEY STORY  <FiChevronRight />
                     <li className="inner-list-item">HISTORY AND HERITAGE</li>
                    <li className="inner-list-item">PEOPLE AND EXPERTISE </li> 
                    <li className="inner-list-item">FUTURE </li> 
                    <li className="inner-list-item">PARTNERSHIPS </li> 
                    <li className="inner-list-item">100 EXTRODINARY YEARS: THE BENTLEY STORY </li> 
                   </li>  
                 </div>

                 <div className="nav-lists">

                {/* OWNERSHIP */}
                <li className="list-item">
                   OWNERSHIP  <FiChevronRight />
                     <li className="inner-list-item">SERVICES</li>
                    <li className="inner-list-item">TECHNOLOGY </li> 
                    <li className="inner-list-item">FINANCIAL SERVICES </li> 
                    <li className="inner-list-item">HERITAGE SUPPORT </li> 
                    <li className="inner-list-item">ACCESSORIES </li> 
                    <li className="inner-list-item">CLUBS AND ASSOCIATIONS </li> 
                   </li>  
                 </div>

                 <div className="nav-lists">

                {/* EXPERIENCES */}
                <li className="list-item">
                   EXPERIENCES  <FiChevronRight />
                     <li className="inner-list-item">EVENTS</li>
                    <li className="inner-list-item">FACTORY TOUR </li>  
                   </li>  
                 </div>

                 <div className="nav-lists">
                {/* SHOP - THE BENTLEY COLLECTION */}
                <li className="list-item"> <FiChevronRight /> SHOP - THE BENTLEY COLLECTION </li>  
                 </div>

                 <div className="nav-lists">

                {/* MOTORSPORT */}
                <li className="list-item">
                   MOTORSPORT  <FiChevronRight />
                     <li className="inner-list-item">OVERVIEW</li>
                    <li className="inner-list-item">CONTINENTAL GT3 RACE CAR </li> 
                    <li className="inner-list-item">JOIN TEAM BENTLEY </li> 
                    <li className="inner-list-item">CUSTOMER RACE TEAMS </li> 
                    <li className="inner-list-item"> MOTORSPORT COLLECTION </li> 
                   </li>  
                 </div> 
              </ul>
 
               </div>
 
            </div> 
   

          <div className="more-info-right">
            <a id="nav-text-two" href=""> CONFIGURATOR </a>
            <a id="nav-text-two" href=""> LOACATE DEALER</a> 
          </div>
        </div> 
    </div>
  ) 
}

export default Navbar; 