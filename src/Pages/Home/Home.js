import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Banner from '../../components/Banner/Banner';
import './Home.scss';

function Home({Api}) {   
  // déclaration du titre présent dans Home mais pas About
    return (
      <div className='kasa-home'>
        <div className='kasa-home__banner'>
            <Banner bannerTitle={"Chez vous, partout et ailleurs"}/>
        </div>

        <div className='kasa-home__container'>
          {
            // map pour pouvoir afficher chaque appartement
            Api.map((item) => {
              return(   
                <Link to={`/property/${item.id}`} key={item.id} >

                    <PropertyCard cover={item.cover} title={item.title}/>
                    
                </Link>
              )
            }) 
          }
        </div>
      </div>
    )
}

Home.protoTypes = {
    Api: PropTypes.array.isRequired,
}

export default Home;