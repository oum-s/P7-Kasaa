import { Link , Outlet} from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Banner from '../../components/Banner/Banner';
import bannerImg from '../../assets/banner-img.png'
// import bannerImg from "../assets/banner-img.png"


function Home() {    

    return (
        <div>
            <h1>Home</h1>
                <Banner bannerImg={bannerImg} />
                    <div>
                        <ul>
                            <li>
                                <Link to="/property/:id">
                                    <PropertyCard />
                                </Link>
                            </li>
                            <li>
                                <Link to="/property/:id">
                                    <PropertyCard />
                                </Link>
                            </li>
                        </ul>
                    </div>
            {/* The Outlet component is essentially a placeholder component that will render whatever our current page's content is.*/}
        <Outlet />
        </div>
    )
}

export default Home;
