import React, { useState } from "react";
import styles from './faqs.module.css'
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';
import FaqsText from "../Faqs-text/faqs-text";



const Faqs = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handlePopUp = () => {

        if (isOpen === false){
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
    }


  return (

    <div className={styles.containerFaqs}>

      <div className={styles.faqs}>

        <div className={styles.textFaqs}>
            <label htmlFor="">Aqui va informacion que se depliega cuanndo hace click</label>
        </div>

        <div   onClick={handlePopUp} className={`${styles.iconFaqs} ${isOpen ? styles.rotated : ""}`} >
            <Icon  className={styles.rotate}  path={mdiMenuDown}  size={1} />
        </div>

      </div>

      <div className={styles.faqsText}>
        {isOpen && <FaqsText />} 
      </div>


    </div>


   
  )
}

export default Faqs
