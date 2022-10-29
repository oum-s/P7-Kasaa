import '../PropertyCard/PropertyCard';
import './PropertyCard.scss';
import Api from '../../api.json';
function PropertyCard() {
  return <div className='kasa-PropertyCard__container'>
            {Api.map((item, index) => {
                        return (
                            <div className="kasa-PropertyCard">
                              <div className='kasa-PropertyCard__cover'>
                              <img src={item.cover} alt='property-cover'></img>
                              </div>
                              <div className='kasa-PropertyCard__title'>
                                <h3> {item.title}</h3>
                              </div>
                          </div>
                        )
            })}
         </div>
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default PropertyCard