import { Link , Outlet} from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Banner from '../../components/Banner/Banner';
import './Home.scss'
import bannerImg from '../../assets/banner-img.png'
// import bannerImg from "../assets/banner-img.png"


function Home() {    

    return (
        <div className='kasa-home'>
            <Banner bannerImg={bannerImg} />
                <div className='kasa-home_container'>
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
