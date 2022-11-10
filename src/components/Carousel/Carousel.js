import { useState } from 'react';
import '../Carousel/Carousel.scss';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
// import CarouselImg from '../../assets/carouselBg.png'

function Carousel({slides}) {
  // état / state
  const [currentIndex, setCurrentIndex] = useState(0);

  // fonction pour faire un retour
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    // variable qui précise que si l'image affiché est la première image 
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1 ;
    setCurrentIndex(newIndex);
  }
  // fonction pour aller à la photo suivante
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
      <div className='left-Arrow' onClick={goToPrevious}>
        <HiOutlineChevronLeft 
        className='arrowStyle'/>
      </div>
      <div className='right-Arrow' onClick={goToNext}>
        <HiOutlineChevronRight 
        className='arrowStyle' />
      </div>
        
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