import './Property.scss';
import '../../components/Carousel/Carousel';
// import { GrStar } from "react-icons/gr";
// import Tag from '../../components/Tag/Tag';
import Carousel from '../../components/Carousel/Carousel';
// import Api from '../../api.json';

function Property() {
  return <div className='kasa-Property__container'>
   {/*  {Api.map((item, index) => { */}
        {/* return( */}
          <div className="kasa-Property">
            <div className='kasa-Property__carousel'>
              <Carousel />
            </div>
          
          <div className='kasa-Property__header'>
            <div className='kasa-Property__header__first'>
              {/* <h1>{item.title}</h1>
              <p>{item.location}</p> */}
              <h1>Cozy loft on the Canal Saint Martin</h1>
              <p>Paris, Ile de France</p>

              <div className='kasa-Property__header__first__tag'>
                {/* <Tag /> */}
                <p>Cozy</p>
                <p>Cozy</p>
                <p>Cozy</p>
              </div>

            </div>

            <div className='kasa-Property__header__second'>
              
              <div className='kasa-Property__header__second__profil'>
                {/* <h3>{item.host.name}</h1>
                <img src='{profilImg}' alt='profil-img'></img> */}
                <h3>Dubois Martin</h3>
                  <div className='kasa-Property__header__second__profil__img'>
                    {/* <img src='' alt='profil-img'></img> */}
                  </div>
                
              </div>
              <div className='kasa-Property__header__second__notation'>
                {/* <span id="stars">
                  < GrStar />
                  < GrStar />
                  < GrStar />
                  < GrStar />
                  <GrStar id="gris"/>
                </span> */}
                <span> Lorepsummmmmmmm</span>
              </div>

            </div>
          </div>

          <div className='kasa-Property__details'>
            
            <div className='kasa-Property__details__first'>
            <p>À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.</p>
            </div>

            <div className='kasa-Property__details__second'>
            <p>À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.</p>
            </div>
          </div>

          </div>
      {/* ) */}
    {/* })} */}
  </div>
}

export default Property;
