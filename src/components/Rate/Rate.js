import PropTypes from "prop-types";
import { GrStar } from "react-icons/gr";
import './Rate';
import '../../Pages/Property/Property.scss';

function Rate({ rating }) {
  
  return (
    <span>
      {/* utilisation de Array(5).fill pour déclarer un tableau de 5 elements */}
      {[1, 2, 3, 4, 5].map((value) => (
        // pour chaque element attribuer une couleur : rose si ça correspond au nombre de rating sinon gris
        <GrStar
          className="iconStar"
          key={value}
          color={value <= rating ? "#FF6060" : "#C4C4C4"}
        />
      ))}
    </span>
  );
}

Rate.protoTypes = {
  rating: PropTypes.number.isRequired
}

export default Rate;

