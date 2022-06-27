import "./ImageSlider.css"; 
import React, {useState} from "react"; 
import ImageSlider from "../BackgroundImages/ImageSlider"; 
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai";  

const BgImages = ({slides}) => {

    const [current, setCurrent] = useState(0); 
    const length = slides.length 

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); 
    };

    const prevSlide = () => {
        setCurrent (current === 0 ? length - 1 : current - 1); 
    }; 

    console.log(current); 

    if (!Array.isArray(slides) || slides.length <=0) {
        return null; 
    }

    return (
        <div className="slider">
            <AiOutlineLeft className="left-arrow" onClick={prevSlide} />  
            <AiOutlineRight className="right-arrow" onClick={nextSlide} /> 

            <div className="image-text">
                <div className="text-one"   >
                    <h2>BENTLEY MULLINER SPEED SIX</h2>
                    <span>Bentley Mulliner will bring the Le Mans winning Speed Six to life in Continuation Edition</span> <br />
                    <button>DISCOVER MORE</button> 

                </div> 
            </div> 


            {ImageSlider.map((slide, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>  
                    {index === current && (
                        <img className="bentley-cars" src={slide.image} alt="bentley motors" /> 
                    )}; 
                    
                    </div>  
                )
 
            })};
        </div>
    );
}; 

export default BgImages; 