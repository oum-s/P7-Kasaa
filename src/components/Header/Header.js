import './Header.scss';
import logo from '../../assets/logo.png';
import { NavLink} from 'react-router-dom';

function Header() {
  return (
    <nav className="kasa-header">
      <img className='logo' src={logo} alt='logo'></img>
      <ul>
        <li>
        {/* utilisation d'une fonction react isActive */}
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link')}>
          Accueil
        </NavLink>
        </li>
        <li>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'link')}>
          A propos
          </NavLink>
        </li>
      </ul>
      {/* <Outlet /> */}
    </nav>
  );
}

export default Header;
