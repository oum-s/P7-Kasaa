import React from 'react';
import { useParams, Navigate } from "react-router-dom";
import { GrStar } from "react-icons/gr";
import './Property.scss';
import '../../components/Carousel/Carousel';
import SectionProperty from '../../components/SectionProperty/SectionProperty';
import Tag from '../../components/Tag/Tag';
import Carousel from '../../components/Carousel/Carousel';
import { checkPropTypes } from 'prop-types';
// import Api from '../../Utils/api.json'

function Property({Api}) {
  let { id } = useParams();
  let item ;
  for (let i = 0 ; i < Api.length; i++) {
    if  (Api[i].id === id) {
      item = Api[i];
      console.log(Api[i].id, 'hey')
      return  (<div className='kasa-Property__container'>
                <div className="kasa-Property" >
                  <div className='kasa-Property__carousel'>
                    <Carousel slides={item.pictures} />
                  </div>
            
                  <div className='kasa-Property__header'  >
      
                    <div className='kasa-Property__header__first'  >
                      <h1>{item.title}</h1>
                      <p>{item.location}</p>
      
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
                    <div className='kasa-Property__details__section'  >
                      <SectionProperty description={item.description} equipments={item.equipments} />
                    </div>
                  </div>
      
                </div>
              </div>)
     }else{
      console.log('undefined');
      return (
        <div>
          {<Navigate to="/NotFound" replace={true} />}
        </div>
      )
    }
  }
   
  console.log(item.id)
  /* return  (<div className='kasa-Property__container'>
                <div className="kasa-Property" >
                  <div className='kasa-Property__carousel'>
                    <Carousel slides={item.pictures} />
                  </div>
            
                  <div className='kasa-Property__header'  >
      
                    <div className='kasa-Property__header__first'  >
                      <h1>{item.title}</h1>
                      <p>{item.location}</p>
      
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
                        <span id="stars">
                          < GrStar />
                          < GrStar />
                          < GrStar />
                          < GrStar />
                          <GrStar id="gris"/>
                        </span>
                        
                      </div>
      
                    </div>
      
                  </div>
      
                  <div className='kasa-Property__details'>
                    <div className='kasa-Property__details__section'  >
                      <SectionProperty description={item.description} equipments={item.equipments} />
                    </div>
                  </div>
      
                </div>
          </div>) */
   /* Api.map((item) => {
    if ( item.id === id ) {
      console.log(id, item.id);
      return  (<div className='kasa-Property__container'>
                  <div className="kasa-Property" >
                    <div className='kasa-Property__carousel'>
                      <Carousel slides={item.pictures} />
                    </div>
              
                    <div className='kasa-Property__header'  >
        
                      <div className='kasa-Property__header__first'  >
                        <h1>{item.title}</h1>
                        <p>{item.location}</p>
        
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
                          <span id="stars">
                            < GrStar />
                            < GrStar />
                            < GrStar />
                            < GrStar />
                            <GrStar id="gris"/>
                          </span>}
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
      }else{
        console.log('hey');
        return (<div>
        {<Navigate to="/NotFound" replace={true} />}
      </div>)
    }}) */
    
  }
  


export default Property;