import React from "react";
// import './Section.scss';
import '../../Pages/About/About.scss'
// import Accordion from '../../components/Accordion/Accordion';
import { accordionData } from '../../Utils/contentAccordion';
import MultipleAccordion from '../Accordion/MultipleAccordion';

function Section ({title, content}) {
  // déclare un tableau qui sera réutilisé dans l'accordéon
  /* let data = [
    {
      title: "Title",
      content: title
    },
    {
      title: "Content",
      content: content
    },
  ] */
  return (
    <div className="kasa-Section__about" >
        <div className="kasa-Section__accordion"  >
          <MultipleAccordion data={accordionData} defaultSection="Fiabilité"></MultipleAccordion>
        </div>
      </div>
  );
};

export default Section;