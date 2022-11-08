import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Banner from '../../components/Banner/Banner';
import './Home.scss';



function Home({Api}) {   
  const bannerTitle = "Chez vous, partout et ailleurs";
    return (
      <div className='kasa-home'>
        <div className='kasa-home__banner'>
            {/* Aucune bannière en props car l'img est en background pour pouvoir modifier l'effet sombre voulu dans la maquette */}
            <Banner bannerImg={""} bannerTitle={bannerTitle}/>
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