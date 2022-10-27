import { Link , Outlet} from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Banner from '../../components/Banner/Banner';
import './Home.scss';


function Home() {   
    const bannerTitle = "Chez vous, partout et ailleurs" 
    return (
        <div className='kasa-home'>
            <div className='kasa-home__banner'>
                <Banner bannerImg={""} bannerTitle={bannerTitle}/>
            </div>
            <div className='kasa-home__container'>
                <Link to="/property/:id">
                    <PropertyCard />
                </Link>
            </div>
            {/* The Outlet component is essentially a placeholder component that will render whatever our current page's content is.*/}
        <Outlet />
        </div>
    )
}

export default Home;
