import React from "react";
import styles from "./pop-up-info.module.css";



export default function PopUpInformation({ActiveComponent}) {

  const handleButtonClick = () => {
    ActiveComponent("popcheck");
  };


  return (

    
    <div className={styles.Popupinf}>

        <p>hola que tal, hola que tal, hola que tal</p>
        <p>hola que tal, hola que tal, hola que tal</p>
        <p>hola que tal, hola que tal, hola que tal</p>
        <p>hola que tal, hola que tal, hola que tal</p>
        <p>hola que tal, hola que tal, hola que tal</p>

      <div className={styles.buttonInfoPop}>
        <button onClick={ handleButtonClick} className={styles.buttonInfoPop}>Checkout</button>
      </div>
      
    </div>

  );
}
