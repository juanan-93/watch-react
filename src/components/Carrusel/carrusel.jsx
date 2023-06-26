import React from "react";
import styles from "./carrusel.module.css";
import ImagePc from "../../assets/images/pc.png";
import TitelCarrusel from "../titel-funcion/titel-funcion.jsx";
import TextCarrusel from "../../components/text-funcion/text-funcion.jsx";
import ImageFunction from "../Image-funcion/image-funcion.jsx";

export default function Carrusel() {
  return (
    <div className="carrusel">

        <TitelCarrusel/>
        <TextCarrusel/>
        <ImageFunction/>


    </div>
  );
}
