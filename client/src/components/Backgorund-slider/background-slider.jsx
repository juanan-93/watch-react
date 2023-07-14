import React from "react";
import image2 from "../../assets/images/azul.jpg";
import styles from "./background-slider.module.css";

export default function BackgrounSlider() {
  return (
    <div className={styles.imageBackground}>

      <img src={image2} alt="background" className={styles.imageSlider}/>
        
    </div>
  );
}