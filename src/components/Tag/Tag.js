import PropTypes from "prop-types";
import '../Tag/Tag';
import '../Tag/Tag.scss';
import Api from '../../api.json';

function Banner({ tagTitle}) {
  return <div className="kasa-banner">
    {Api.map((item, index) => {
            return(
              <p>{item.equipments}</p>
            )
            })
    }
         </div>
}

// Banner.protoTypes = {
//   bannerImg: PropTypes.element,
// }
Banner.protoTypes = {
  bannerTitle: PropTypes.string,
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default Banner