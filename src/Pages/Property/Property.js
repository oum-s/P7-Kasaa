import React from 'react';
import './Property.scss';
import '../../components/Carousel/Carousel';
import SectionProperty from '../../components/SectionProperty/SectionProperty'
import { GrStar } from "react-icons/gr";
import Tag from '../../components/Tag/Tag';
import Carousel from '../../components/Carousel/Carousel';


function Property({Api}) {
  return (
    <div className='kasa-Property__container'>
      <React.Fragment>
        <div className="kasa-Property" >
          <div className='kasa-Property__carousel'>
            <Carousel />
          </div>
    
          <div className='kasa-Property__header'  >
            <div className='kasa-Property__header__first'  >
              <h1>{Api.title}</h1>
              <p>{Api.location}</p>

              <div className='kasa-Property__header__first__tag'  >
                <Tag tags={Api.tags}   />
              </div>

            </div>

            <div className='kasa-Property__header__second'  >
              
              <div className='kasa-Property__header__second__profil'  >
                <div className='kasa-Property__header__second__profil__author'  >
                  <h3>{Api.host.name}</h3>
                </div>
                <div className='kasa-Property__header__second__profil__img'>
                  <img src={`${Api.host.picture}`} alt='profil-img'></img>
                </div>
                
              </div>

              <div className='kasa-Property__header__second__notation'  >
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

        <div className='kasa-Property__details'  
        >
          <div className='kasa-Property__details__section'  >
            <SectionProperty description={Api.description} equipments={Api.equipments} />
          </div>
          
        </div>

        </div>
      </React.Fragment>
    </div>
  )
}

export default Property;
