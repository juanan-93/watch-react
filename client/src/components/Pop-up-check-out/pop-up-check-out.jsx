import React from "react";
import styles from "./pop-up-check-out.module.css";



export default function PopUpCheckout({ ActiveComponent }) {

  const handleButtonClick = () => {
    ActiveComponent("popinfo");
  };



  return (

    
    <div className={styles.PopupCheckout}>

        <form className={styles.frompop}>

            <label className={styles.inpLa} htmlFor="">nomber</label>
            <input className={styles.inp} type="text" />
            
            

            <div className={styles.buttoncheck}>
                <button className={styles.buttonChecktout} onClick={handleButtonClick} >Pagar</button>
            </div>

        </form>
      
    </div>

  );
}
