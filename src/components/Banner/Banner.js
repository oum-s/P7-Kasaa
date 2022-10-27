import PropTypes from "prop-types";
import '../Banner/Banner';
function Banner({bannerImg}) {
  return <div className="kasa-Banner">
            <img src={bannerImg} alt='banner-img'></img>
         </div>
}

Banner.protoTypes = {
  bannerImg: PropTypes.element.isRequired,
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default Banner