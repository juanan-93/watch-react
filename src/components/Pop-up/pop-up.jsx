import React,{useState} from "react";
import styles from "./pop-up.module.css";
import popUpImmage from "../../assets/images/the-watch-3-291x524.png";
import Popinfo from "../Pop-up-info/pop-up-info.jsx"
import PopCheck from "../Pop-up-check-out/pop-up-check-out.jsx";


export default function PopUp() {


  const [activeComponent, setActiveComponent] = useState("popinfo");
 


  return (

    
    <div className={styles.Popup}>

      <div className={styles.imgPopUp}>

        <img className={styles.popimg} src={popUpImmage} alt="pop-up" />
        
      </div>

      <div className={styles.PopUpContain}>

        {activeComponent === "popinfo" && (
            <Popinfo ActiveComponent={setActiveComponent} />
        )}

       {activeComponent === "popcheck" && (
          <PopCheck ActiveComponent={setActiveComponent} />
        )}

      </div>
      
    </div>

  );
}
