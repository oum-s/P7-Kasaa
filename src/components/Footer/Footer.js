import './Footer.scss';
import logo from '../../assets/footer-logo.png'

function Footer() {
  return (
    <div className="kasa-footer">
      <img className="logo" src={logo} alt='footer-logo'></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;