import "./HomeAnchors.css";  
import React from "react"; 

const HomeTitles = () => {
  return (
    <>  
    {/* OWNERSHIP AND PRE-OWNED SECTION */}
    <div className="hometitle"> 
        <div className="ht-content"> 
        
        <div className="ht-content-left">
            <a href="">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Homestage%20Tiles/Bentley-man-and-woman-by-Continental-GT-Convertible-1024x512.jpg/_jcr_content/renditions/original.image_file.960.480.file/Bentley-man-and-woman-by-Continental-GT-Convertible-1024x512.jpg" 
                />
                <text> OWNERSHIP </text>
            </a>
        </div> 

        <div className="ht-content-right">
            <a href="">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Homestage%20Tiles/Certified-by-Bentley-pre-owned-2020-1024x512.jpg/_jcr_content/renditions/original.image_file.960.480.file/Certified-by-Bentley-pre-owned-2020-1024x512.jpg" 
                /> 
                <text> PRE-OWNED </text> 
            </a>
        </div>
        </div> 
    </div> 

{/* BUTTONS SECTION (NEWSLETTER, LOCATE DEALER ETC...) */}
<div className="home-btns" >
    <ul className="home-btns-list">

{/* NEWSLETTER */}
        <li className="home-btns-list-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/Ready%20to%20go%20bar/newsletter_40x40.png/_jcr_content/renditions/original.image_file.40.40.file/newsletter_40x40.png" 
                />
                <span className="item-name">NEWSLETTER</span>
            </a>

        </li>   
{/* LOCATE DEALER */}
        <li className="home-btns-list-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/Ready%20to%20go%20bar/location2-40x40.png/_jcr_content/renditions/original.image_file.40.40.file/location2-40x40.png" 
                />
                <span className="item-name">LOCATE DEALER</span> 
            </a>

        </li>
{/* CONFIGURATOR */}
        <li className="home-btns-list-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/Ready%20to%20go%20bar/configure-40x40%20copy.png/_jcr_content/renditions/original.image_file.40.40.file/configure-40x40%20copy.png" 
                />
                <span className="item-name">CONFIGURATOR</span>
            </a>

        </li> 
{/* DOWNLOAD E-BROCHURE */}
        <li className="home-btns-list-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/Ready%20to%20go%20bar/brochure.png/_jcr_content/renditions/original.image_file.40.40.file/brochure.png" 
                />
                <span className="item-name">DOWNLOAD E-BROCHURE</span> 
            </a>

        </li> 
    </ul>
</div>

{/* LINK SECTION */}
<div className="mid-footer">
    <div className="mid-f-list">

        {/* MODELS */}
        <div className="mid-f-items">
            <h5 className="footer-title">MODELS</h5>
            <ul className="inner-f-list">
                <li className="inner-item"> <a href="#">
                <text>Bentayga Extended Wheelbase</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Bentayga</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Flying Spur</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Continental GT</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Continental GTC</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Mulliner</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text> <i>ICON</i>Pre-Owned</text> 
                </a> 
                </li>
            </ul>
        </div>

        {/* WORLD OF BENTLEY */}
        <div className="mid-f-items">
            <h5 className="footer-title">WORLD OF BENTLEY</h5>
            <ul className="inner-f-list">
                <li className="inner-item"> <a href="#">
                <text>Bentley Network </text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Experiences</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Motorsport</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text><i>ICON</i> Shop </text> 
                </a> 
                </li>
            </ul> 
        </div>

        {/* OWNERSHIP */}
        <div className="mid-f-items">
            <h5 className="footer-title">OWNERSHIP</h5>
            <ul className="inner-f-list">
                <li className="inner-item"> <a href="#">
                <text>Services</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Technology</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Finance Services</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Club and Associations</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text><i>ICON</i> Accessories</text>
                </a> 
                </li>
            </ul>
        </div>

        {/* ABOUT BENTLEY */}
        <div className="mid-f-items">
            <h5 className="footer-title">ABOUT BENTLEY</h5>
            <ul className="inner-f-list">
                <li className="inner-item"> <a href="#">
                <text>History and Heritage</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>News</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>People and Expertise</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Future</text>
                </a> 
                </li>

                <li className="inner-item"> <a href="#">
                <text>Partnerships</text>
                </a> 
                </li> 
            </ul>
        </div>
    </div>

{/* SOCIAL-MEDIA LINKS*/}
<div className="social-media">
    <ul className="sm-list">
 
        <li className="sm-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/new%20social%20icons/facebook-80x80.png/_jcr_content/renditions/original.image_file.80.80.file/facebook-80x80.png" 
                />
            </a>
        </li>

        <li className="sm-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/new%20social%20icons/twitter-80x80.png/_jcr_content/renditions/original.image_file.80.80.file/twitter-80x80.png" 
                />
            </a>
        </li>

        <li className="sm-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/new%20social%20icons/youtube-80x80.png/_jcr_content/renditions/original.image_file.80.80.file/youtube-80x80.png" 
                />
            </a>
        </li>

        <li className="sm-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/new%20social%20icons/pinterest-80x80.png/_jcr_content/renditions/original.image_file.80.80.file/pinterest-80x80.png" 
                />
            </a>
        </li>

        <li className="sm-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/new%20social%20icons/instagram-80x80.png/_jcr_content/renditions/original.image_file.80.80.file/instagram-80x80.png" 
                />
            </a>
        </li>

        <li className="sm-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/new%20social%20icons/cicrle-tiktok-logo%2080x80%202.png/_jcr_content/renditions/original.image_file.80.80.file/cicrle-tiktok-logo%2080x80%202.png" 
                />
            </a>
        </li>

        <li className="sm-item">
            <a href="#">
                <img src="https://www.bentleymotors.com/content/dam/bentley/Master/Icons/new%20social%20icons/wechat-80x80.png/_jcr_content/renditions/original.image_file.80.80.file/wechat-80x80.png" 
                />
            </a> 
        </li> 
    </ul>
</div>

</div>  

{/* FOOTER */}
<div className="end-footer"> 

<div className="end-list">
    <nav className="end-list-nav">
        <ul className="end-inner-list">

            <li className="end-list-items">
                <a href="">
                    <text>Configurator</text> 
                </a>
            </li>

            <li className="end-list-items">
                <a href="">
                    <text>Contact Us</text> 
                </a>
            </li>

            <li className="end-list-items">
                <a href="">
                    <text>Sitemap</text> 
                </a>
            </li>

            <li className="end-list-items">
                <a href="">
                    <text> <i>ICON</i> Carers </text> 
                </a>
            </li>

            <li className="end-list-items">
                <a href="">
                <text> <i>ICON</i> Corporate </text>  
                </a>
            </li>

            <li className="end-list-items">
                <a href="">
                <text> <i>ICON</i> Media </text>
                </a>
            </li>

            <li className="end-list-items">
                <a href="">
                <text> <i>ICON</i> Manderin? </text>
                </a>
            </li>

            <li className="end-list-items">
                <a href="">
                <text> <i>ICON</i> Phillipines? </text>
                </a>
            </li>
        </ul>
    </nav>
</div>

<div className="end-info">
    <div className="info-text">
        <p> Copyright Bentley Motors 2022 (React Bentley Clone)</p>
        <p> Registered Office: </p>
        <p>
            <a href="">
                <text>Terms and Conditions</text> 
            </a> | 

            <a href="">
                <text>Privacy Policy</text>   
            </a> |

            <a href="">
                <text>Cookies</text> 
            </a> |

            <a href="">
                <text>Manage Cookie Settings</text> 
            </a> |

            <a href="">
            <text><i>ICON</i> Modern Slavery </text> 
            </a> |

            <a href="">
                <text><i>ICON</i> Look-Up Recalls USA</text> 
            </a> 
        </p>
    </div>
</div>

<div id="footer-text">
    <p>
    All vehicles on this page: WLTP drive cycle: fuel consumption, mpg (l/100 km) – Combined 21.7-85.6 (3.3-13). Combined CO₂ – 75-294 g/km.
    </p> 
</div>
</div>

</>
  )
};   

export default HomeTitles;  