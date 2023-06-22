import React from "react";
import image2 from "../../assets/images/primer-plano-taza-cafe-cuaderno-boligrafo-telefono-inteligente-escritorio-blanco-interior.jpg";
import "./background-slider.css";

export default function BackgrounSlider() {
  return (
    <div className="image-Background">

        <img src={image2} alt="background" className="image-slider"/>
        
    </div>
  );
}