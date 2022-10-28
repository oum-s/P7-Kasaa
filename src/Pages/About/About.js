import Banner from '../../components/Banner/Banner';
import DropDown from '../../components/DropDown/DropDown';
import bannerImg from '../../assets/banner-img.png'
import './About.scss';


function About() {
    const bannerTitle = "";
    return (
        <div className='kasa-about'>
            {/* changer l'image de la banière */}
            <div className='kasa-about__banner'>
                <Banner bannerImg={bannerImg} bannerTitle={bannerTitle}/>
            </div>
            
            <DropDown />
        </div>
    )
}

export default About;
