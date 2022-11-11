import PropTypes from "prop-types";
import '../PropertyCard/PropertyCard';
import './PropertyCard.scss';

function PropertyCard({cover, title}) {
  return (
    <div className='kasa-PropertyCard__container'>
      <div className="kasa-PropertyCard">
        <div className='kasa-PropertyCard__cover'  >
        {/*props pour pouvoir attribuer n'importe quel cover ou title  */}
          <img key={cover} src={cover} alt='property-cover'></img>

        </div>
        <div className='kasa-PropertyCard__title'  >

          <h3 key={title}> {title}</h3>

        </div>
      </div>
    </div>)
}

PropertyCard.protoTypes = {
  cover: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default PropertyCard