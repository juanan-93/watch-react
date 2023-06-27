import React from "react";
import styles from "./footer-background.module.css";
import Imageback from "../../assets/images/Captura de pantalla 2023-06-27 095855.png";


export default function BackgroundFooter() {
  return (

    <div className={styles.footerBack}>

      <img src={Imageback} alt="map" />
     
    </div>

  );
}
