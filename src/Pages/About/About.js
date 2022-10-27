import Banner from '../../components/Banner/Banner';
import DropDown from '../../components/DropDown/DropDown';
import bannerImg from '../../assets/bannerAbout-img.png';
import './About.scss';

function About() {
    return (
        <div className='kasa-about'>
            {/* changer l'image de la banière */}
            <Banner bannerImg={bannerImg} /> 
            <DropDown />
        </div>
    )
}

export default About;
