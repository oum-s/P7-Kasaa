import { useState } from 'react';
import '../Carousel/Carousel.scss';
// import CarouselImg from '../../assets/carouselBg.png'

function Carousel({slides}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 ;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ?  0 : currentIndex + 1 ;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <div className="kasa-Carousel">
      <div className='left-Arrow' onClick={goToPrevious}>❰</div>
      <div className='right-Arrow' onClick={goToNext}>❱</div>
        <div className="kasa-Carousel__content" style={{backgroundImage: `url(${slides[currentIndex]})`}}>
          <div className='numbers'>
          {currentIndex+1} / { slides.length }
          </div>

        </div>
    </div>
  );
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default Carousel