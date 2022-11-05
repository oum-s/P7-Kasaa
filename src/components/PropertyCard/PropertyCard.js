// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import '../PropertyCard/PropertyCard';
import './PropertyCard.scss';
import Api from '../../Utils/api.json';

function PropertyCard() {
  return (
    <div className='kasa-PropertyCard__container'>
      {Api.map((item, index) => {
        return (
          <Link to={`/property/${item.id}`} key={item.id} >
            <div className="kasa-PropertyCard">
              <div className='kasa-PropertyCard__cover'>
                <img src={item.cover} alt='property-cover'></img>
                  <h3> {item.title}</h3>
              </div>
            </div> 
          </Link>
        )
      })}
    </div>
  )
}

//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default PropertyCard