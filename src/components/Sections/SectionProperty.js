import PropTypes from "prop-types";
import React from "react";
import Accordion from '../Accordion/Accordion';

function SectionProperty ({description, equipments}) {
  // utiliser un tableau qui regroupera toutes les descriptions et equipments du fichier JSON lorsque la props sera transmis dans le composant accordeon puis la page Property
  let data = [
    {
      title: "Description",
      content: description
    },
    {
      title: "Equipements",
      content: 
        equipments.map((element, index) => {
          return(
            <ul key={ index }>
              { <li> {element} </li>}
            </ul>
          )
        })
    },
  ];
  let dataDescrription = [
    {
      title: "Description",
      content: description
    }    
  ];
  let dataEquipement = [   
    {
      title: "Equipements",
      content: 
        equipments.map((element, index) => {
          return(
            <ul key={ index }>
              { <li> {element} </li>}
            </ul>
          )
        })
    }
  ];

  return (
    <>
      <div className="kasa-SectionProperty" >
        <div className="kasa-accordionProperty"  >
          <Accordion data={dataDescrription} defaultSection="Description"></Accordion>
          <Accordion data={dataEquipement} defaultSection="Equipements"></Accordion>
        </div>
      </div>
    </>
  );
};

SectionProperty.protoTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.array.isRequired,
}

export default SectionProperty;