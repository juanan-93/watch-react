import React from "react";
import styles from "./image-funcion.module.css";
import imagePc from "../../assets/images/pc.png";


export default function ImageFunction() {
  return (

    <div className={styles.ImageFunction}>

      <div className={styles.content}>
        <div className={styles.imagefu}>
            <img className={styles.imagef}  src={imagePc} alt="pc" />
        </div>

        <div className={styles.titlef}>
            <h3 className={styles.titlefu}>Connect Device</h3>
        </div>

        <div className={styles.textf}>
            <p className={styles.textfu}>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.imagefu}>
            <img className={styles.imagef}  src={imagePc} alt="pc" />
        </div>

        <div className={styles.titlef}>
            <h3 className={styles.titlefu}>Connect Device</h3>
        </div>

        <div className={styles.textf}>
            <p className={styles.textfu}>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
        </div>
      </div>


      <div className={styles.content}>
        <div className={styles.imagefu}>
            <img className={styles.imagef}  src={imagePc} alt="pc" />
        </div>

        <div className={styles.titlef}>
            <h3 className={styles.titlefu}>Connect Device</h3>
        </div>

        <div className={styles.textf}>
            <p className={styles.textfu}>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
        </div>
      </div>

      

    </div>

  );
}
