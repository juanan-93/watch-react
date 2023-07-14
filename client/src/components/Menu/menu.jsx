import React, { useState } from "react";
import "./menu.css";
import Modal from "../Modal/modal.jsx";




export default function Menu() {

  const [showModal, setShowModal] = useState(false);

  const handleItemClick = () => {
    
    if (showModal === false){
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    
    <div className="menu">
      <nav>
        <ul>
          <li>HOME</li>
          <li>PRODUCT</li>
          <li>FEATURES</li>
          <li>REVIEWA</li>
          <li>CONTACT</li>
          <li onClick={handleItemClick} >PAGES</li>
          {showModal && <Modal/>}
        </ul>
      </nav>
    </div>
  );
}