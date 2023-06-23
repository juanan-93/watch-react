import React from "react";
import styles from "./buttons.module.css";
import Icon from '@mdi/react';
import { mdiCartVariant } from '@mdi/js';



export default function Buttons() {
  return (

    <div className={styles.buttons}>

      <div className={styles.buttonCart}>
        <button className={styles.cart}>
          <Icon path={mdiCartVariant} size={1} style={{ color: 'white' }} />
        </button>
      </div>

      <div className={styles.buttonBuy}>
        <button>BUY IT NOW</button>
      </div>

    </div>

  );
}
