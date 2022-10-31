import './DropDown.scss';
import { Data } from './Data';
import React, { useState } from "react";

function DropDown({dropDownTitle, dropDownDescr}) {
  // au click sur le header , la classe change en display normal
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  return <div className="kasa-DropDown">
              {Data.map((item, index) => {
                return (
                  <div className='kasa-DropDown__item'>
                    <div onClick={handleToggle}className='kasa-DropDown__item__header'>
                      
                      <h2> {item.title} </h2>
                    </div>
                    <div className={isActive ? "kasa-DropDown__item__description hide" : "kasa-DropDown__item__description show"}>
                      <p>{item.description}</p>
                    </div>
                  </div>
                )
              })}
        
         </div>
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default DropDown