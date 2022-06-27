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

</div>

{/* LIST SECTIONS */}
<div className="home-lists">

</div>

{/* SOCIAL-MEDIA LINKS*/}
<div className="social-media">

</div>

{/* FOOTER */}

<div className="footer"> 

</div>

</>
  )
} 

export default HomeTitles; 