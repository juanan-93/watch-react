import React from "react";
import styles from "./product-gallery.module.css";
import imagetWatch from "../../assets/images/product.png";


export default function Product() {
  return (

    <div className={styles.product}>

      <div className={styles.Productcontent}>
            <div className={styles.imageProduct}>
                <img className={styles.imagetWatch}  src={imagetWatch} alt="watch" />
            </div>

            <div className={styles.titleContent}>
                <h3 className={styles.titleProduct}>Connect Device</h3>
            </div>

            <div className={styles.textContent}>
                <p className={styles.textProduct}>SMART WATCH</p>
            </div>

            <div className={styles.priceContent}>
                <p className={styles.textPrice}>€245</p>
            </div>

            <div className={styles.ProductButton}>
                <button className={styles.buttonProduct}>CHOOSE</button>
            <div/>    

        </div> 
        
        
        

      </div>

      <div className={styles.Productcontent}>
            <div className={styles.imageProduct}>
                <img className={styles.imagetWatch}  src={imagetWatch} alt="watch" />
            </div>

            <div className={styles.titleContent}>
                <h3 className={styles.titleProduct}>Connect Device</h3>
            </div>

            <div className={styles.textContent}>
                <p className={styles.textProduct}>SMART WATCH</p>
            </div>

            <div className={styles.priceContent}>
                <p className={styles.textPrice}>€245</p>
            </div>

            <div className={styles.ProductButton}>
                <button className={styles.buttonProduct}>CHOOSE</button>
            <div/>    

        </div> 
        
        
        

      </div>

      <div className={styles.Productcontent}>
            <div className={styles.imageProduct}>
                <img className={styles.imagetWatch}  src={imagetWatch} alt="watch" />
            </div>

            <div className={styles.titleContent}>
                <h3 className={styles.titleProduct}>Connect Device</h3>
            </div>

            <div className={styles.textContent}>
                <p className={styles.textProduct}>SMART WATCH</p>
            </div>

            <div className={styles.priceContent}>
                <p className={styles.textPrice}>€245</p>
            </div>

            <div className={styles.ProductButton}>
                <button className={styles.buttonProduct}>CHOOSE</button>
            <div/>    

        </div> 
        
        
        

      </div>
      

    </div>

  );
}
