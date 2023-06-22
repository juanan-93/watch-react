import React from "react";
import "./slider.css";
import TitelSlider from "../Titel-slider/titel-slider.jsx";
import TextSlider from "../Text-slider/text-slider.jsx";
import ButtonSlider from "../Button-slider/button-slider.jsx";
import ImageSlider from "../Image-slider/image-slider.jsx";
import BackgroundSlider from "../Backgorund-slider/background-slider.jsx";

export default function Slider() {
  return (

    <div className= "slider">
        <BackgroundSlider/>
        <ImageSlider/>
        <ButtonSlider/>
        <TextSlider/>
        <TitelSlider/>
    </div>
  );
}