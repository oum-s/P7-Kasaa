import './Property.scss';
import '../../components/Carousel/Carousel';
import SectionProperty from '../../components/SectionProperty/SectionProperty'
import { GrStar } from "react-icons/gr";
import Tag from '../../components/Tag/Tag';
import Carousel from '../../components/Carousel/Carousel';
import Api from '../../Utils/api.json';
// import { useParams } from 'react-router-dom';


function Property() {

  return (
    
      <div className='kasa-Property__container'>
        {
            Api.map((item) => { 

              return( 
                <>
                  <div className="kasa-Property" key={item.id}>
                    <div className='kasa-Property__carousel'>
                      <Carousel />
                    </div>
              
                  <div className='kasa-Property__header'key={item.id}>
                    <div className='kasa-Property__header__first' key={item.id}>
                      <h1>{item.title}</h1>
                      <p>{item.location}</p>
      
                      <div className='kasa-Property__header__first__tag'>
                        <Tag tags={item.tags} key={item.id} />
                        <p>Cozy</p>
                        <p>Cozy</p>
                        <p>Cozy</p>
                      </div>
      
                    </div>
      
                    <div className='kasa-Property__header__second'>
                      
                      <div className='kasa-Property__header__second__profil'>
                        <div className='kasa-Property__header__second__profil__author'>
                          <h3>{item.host.name}</h3>
                        </div>
                        <div className='kasa-Property__header__second__profil__img'>
                          <img src={`${item.host.picture}`} alt='profil-img'></img>
                        </div>
                        
                      </div>
                      <div className='kasa-Property__header__second__notation'>
                        <span id="stars">
                          < GrStar />
                          < GrStar />
                          < GrStar />
                          < GrStar />
                          <GrStar id="gris"/>
                        </span>
                        {/* <span> Lorepsummmmmmmm</span> */}
                      </div>
      
                    </div>
                  </div>
  
                  <div className='kasa-Property__details'>
                    
                    {/* <div className='kasa-Property__details__first'>
                    <p>À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.</p>
                    </div>
      
                    <div className='kasa-Property__details__second'>
                    <p>À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.</p>
                    </div> */}
                    <div className='kasa-Property__details__section' key={item.id}>
                      <SectionProperty key={item.id}/>
                    </div>
                    
                  </div>
  
                  </div>
                </>
              ) 
            }) 
        }
      </div>
      
  )
}

export default Property;
