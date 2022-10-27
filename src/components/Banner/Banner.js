// import PropTypes from "prop-types";
import '../Banner/Banner';
import '../Banner/Banner.scss'
function Banner({bannerImg, bannerTitle}) {
  return <div className="kasa-banner">
           {/*  <img src={bannerImg} alt='banner-img'></img> */}
            <h2>Chez vous, partout et ailleurs</h2>
         </div>
}

// Banner.protoTypes = {
//   bannerImg: PropTypes.element.isRequired,
// }
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default Banner