import React from 'react';
import { useParams, Navigate } from "react-router-dom";
// import { GrStar } from "react-icons/gr";
import './Property.scss';
import '../../components/Carousel/Carousel';
import SectionProperty from '../../components/SectionProperty/SectionProperty';
import Rate from '../../components/Rate/Rate';
import Tag from '../../components/Tag/Tag';
import Carousel from '../../components/Carousel/Carousel';
// import { checkPropTypes } from 'prop-types';

function Property({Api}) {
  // récupérer l'id de l'url
  let { id } = useParams();
  // déclarer l'item 
  let item = null;
  // Afficher les info de l'Api pour chaque appartements
  for (let i = 0 ; i < Api.length; i++) {
    // si l'id de l'url correspond à l'id de l'Api
    if  (Api[i].id === id) {
      // un item = un appartement (ses infos)
      item = Api[i];
      break;
    }
  }

  // et si l'item ne correspond à aucun appartement
  if (item == null) {
    // page notFound
    return (
        <div>
            {<Navigate to="/NotFound" replace={true} />}
        </div>
    )
  }

  // return par défaut le contenu suivant
  return  (<div className='kasa-Property__container'>
            <div className="kasa-Property" >

              <div className='kasa-Property__carousel'>
                  <Carousel slides={item.pictures} />
              </div>

              <div className='kasa-Property__header'  >

                <div className='kasa-Property__header__first'  >
                    <div className='kasa-Property__header__first__title'>
                        <h1>{item.title}</h1>
                        <p>{item.location}</p>
                    </div>
                    <div className='kasa-Property__header__first__tag'  >
                        <Tag tags={item.tags}   />
                    </div>
                </div>

                <div className='kasa-Property__header__second'  >

                    <div className='kasa-Property__header__second__profil'  >
                        <div className='kasa-Property__header__second__profil__author'  >
                            <h3>{item.host.name}</h3>
                        </div>
                        <div className='kasa-Property__header__second__profil__img'>
                            <img src={`${item.host.picture}`} alt='profil-img'></img>
                        </div>
                    </div>

                    <div className='kasa-Property__header__second__notation'  >
                        <Rate 
                        rating={item.rating} />
                    </div>

                </div>

              </div>

              <div className='kasa-Property__details'>
                  <div className='kasa-Property__details__section'  >
                      <SectionProperty description={item.description} equipments={item.equipments} />
                  </div>
              </div>

            </div>
          </div>)
}



export default Property;