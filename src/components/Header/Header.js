import './Header.scss';
import logo from '../../assets/logo.png';
import { NavLink, Link} from 'react-router-dom';

function Header() {
  return (
    <header className="kasa-header">
      <Link to={"/"}>
        <img className='logo' src={logo} alt='logo'></img>
      </Link>
      
        <nav>
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
        </nav>
      {/* <Outlet /> */}
    </header>
  );
}

export default Header;
