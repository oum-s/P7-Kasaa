import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Banner from '../../components/Banner/Banner';
import './Home.scss';



function Home({Api}) {   
  const bannerTitle = "Chez vous, partout et ailleurs";
    return (
      <div className='kasa-home'>
        <div className='kasa-home__banner'>
            <Banner bannerImg={""} bannerTitle={bannerTitle}/>
        </div>
        <div className='kasa-home__container'>
          {
            Api.map((item) => {
              return(   
                <PropertyCard key={item.id} cover={item.cover} title={item.title}/>
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
