import { Link , Outlet} from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Banner from '../../components/Banner/Banner';
import './Home.scss';
import Api from '../../Utils/api.json';


function Home() {   
    console.log("Hello World");
    const bannerTitle = "Chez vous, partout et ailleurs";
        return (
        <>
            <div className='kasa-home'>
                {
                Api.map((index) => {
                    return(
                        <>
                            <div className='kasa-home__banner'>
                                <Banner bannerImg={""} bannerTitle={bannerTitle}/>
                            </div>
                            <div className='kasa-home__container'>
                                <Link to={`/property/${index.id}`}>
                                    <PropertyCard />
                                </Link>
                            </div>
                        </>
                    )
                })
                }
            </div>
            {/* /* The Outlet component is essentially a placeholder component that will render whatever our current page's content is. */ }
            <Outlet /> 
        </>
        
        )
}

export default Home;
