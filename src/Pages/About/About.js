import Banner from '../../components/Banner/Banner';
import DropDown from '../../components/DropDown/DropDown';
import bannerImg from '../../assets/bannerAbout-img.png'

function About() {
    return (
        <div>
            {/* changer l'image de la banière */}
            <Banner bannerImg={bannerImg} /> 
            <DropDown />
        </div>
    )
}

export default About;
