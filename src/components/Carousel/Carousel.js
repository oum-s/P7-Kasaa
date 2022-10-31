import '../Carousel/Carousel.scss';
import CarouselImg from '../../assets/carouselBg.png'
// import Api from '../../Utils/api.json'

function Carousel() {
  return (
    <div className="kasa-Carousel">
            <img src={CarouselImg} alt='Carousel-img'></img>
    </div>
  );
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default Carousel