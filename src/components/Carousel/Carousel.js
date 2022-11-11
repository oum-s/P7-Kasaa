import { useState } from 'react';
import PropTypes from "prop-types";
import '../Carousel/Carousel.scss';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

function Carousel({slides}) {
  // état / state
  const [currentIndex, setCurrentIndex] = useState(0);

  // fonction pour faire un retour
  const goToPrevious = () => {
    // déclarer la premier image et image par défault comme étant la firstSlide
    const isFirstSlide = currentIndex === 0;
    // si on est à la première image on va à la dernière image sinon à l'image précedente
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 ;
    // met à jour l'état
    setCurrentIndex(newIndex);
  }
  // fonction pour aller à la photo suivante
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ?  0 : currentIndex + 1 ;
    setCurrentIndex(newIndex);
  }


  return (
    <div className="kasa-Carousel">
<<<<<<< HEAD
      {/* au click aller à l'image précedente */}
      <div className='left-Arrow' onClick={goToPrevious}>

        <HiOutlineChevronLeft 
        className='arrowStyle'/>

      </div>
      {/* au click aller à l'image suivante */}
      <div className='right-Arrow' onClick={goToNext}>

        <HiOutlineChevronRight 
        className='arrowStyle' />

      </div>
        
        <div className="kasa-Carousel__content"
        // insérer la props slides ainsi que l'image current
         style={{backgroundImage: `url(${slides[currentIndex]})`}}>
          <div className='numbers'>
            {/* compteur */}
=======
      <div className='left-Arrow' onClick={goToPrevious}>❰</div>
      <div className='right-Arrow' onClick={goToNext}>❱</div>
        <div className="kasa-Carousel__content" style={{backgroundImage: `url(${slides[currentIndex]})`}}>
          <div className='numbers'>
>>>>>>> bd5c6b4a78ed27bc633750c7ae3771576125f912
          {currentIndex+1} / { slides.length }
          </div>

        </div>
    </div>
  );
}

Carousel.protoTypes = {
  slides: PropTypes.element.isRequired
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default Carousel