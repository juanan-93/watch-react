import React from "react";
import styles from "./from.module.css";


export default function From() {
  return (

    
    <div className={styles.from}>

      <div className={styles.titleFrom}>
        <h2>Contáctanos</h2>

      </div>
      
      <form>
        
        <div className={styles.name}>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Ingresa tu email" />
        </div>
        <div>
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje"></textarea>
        </div>
        <div className={styles.fromButton}>
          <button className={styles.buttonFrom} type="submit">Enviar</button>
        </div>

      </form> 

    </div>

  );
}
