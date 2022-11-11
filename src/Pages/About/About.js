import Banner from '../../components/Banner/Banner';
import Section from '../../components/Sections/Section';
import './About.scss';


function About() {
  
    return (
      <div className='kasa-about'>
        <div className='kasa-about__banner'>
          {/* pas de titre de bannière mais pas d'erreurs car notRequired */}
          <Banner />

        </div>

          <Section />

      </div>
    )
}

export default About;
