import PropTypes from "prop-types";
import '../Banner/Banner';
import '../Banner/Banner.scss';


function Banner({ bannerTitle}) {
  return <div className="kasa-banner" key={bannerTitle}>
            <h2>{bannerTitle}</h2>
         </div>
}

Banner.protoTypes = {
  bannerTitle: PropTypes.string,
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default Banner