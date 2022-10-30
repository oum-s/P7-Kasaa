import React from "react";
import './Section.scss';
import Accordion from '../../components/Accordion/Accordion';
import { accordionData } from '../../Utils/contentAccordion';
// import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Section() {
  
  return (
      <div className="accordion">
        {accordionData.map(({data, index})=> (
          <Accordion title={data.title} content={data.content} />
        ))}
      </div>
  );
}

export default Section;
