import './Footer.scss';
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <div className="kasa-footer">
      <img src={logo} alt='logo'></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;