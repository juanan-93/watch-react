import React from "react";
import "./buttons.css";
import Icon from '@mdi/react';
import { mdiCartVariant } from '@mdi/js';



export default function Buttons() {
  return (

    <div className="buttons">

      <div className="button-cart">
        <button className="cart">
          <Icon path={mdiCartVariant} size={1} style={{ color: 'white' }} />
        </button>
      </div>

      <div className="button-buy">
        <button>BUY IT NOW</button>
      </div>

    </div>

  );
}
