import React,{useState} from "react";
import styles from "./buttons.module.css";
import Icon from '@mdi/react';
import { mdiCartVariant } from '@mdi/js';
import PopUps from "../Pop-up/pop-up.jsx";



export default function Buttons() {

  const [popUp, setPopUp] = useState(false);

  

  return (

    <div className={styles.buttons}>

      <div className={styles.buttonCart}>
        <button className={styles.cart}>
          <Icon path={mdiCartVariant} size={1} style={{ color: 'white' }} />
        </button>
      </div>

      <div className={styles.buttonBuy}>
        <button className={styles.buyButton} >BUY IT NOW</button>
        {popUp && <PopUps />}
      </div>

    </div>

  );
}
