// import PropTypes from "prop-types";
// import { useState } from "react";
import { GrStar } from "react-icons/gr";
import './Rate';
import '../../Pages/Property/Property.scss';

function Rate({ rating, size }) {
  
  return (
    <span>
      {/* utilisation de Array(5).fill pour déclarer un tableau de 5 elements */}
      {[1, 2, 3, 4, 5].map((value) => (
        <GrStar
          className="iconStar"
          key={value}
          color={value <= rating ? "#FF6060" : "#C4C4C4"}
        />
      ))}
    </span>
  );
}

export default Rate;

