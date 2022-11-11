import './Header.scss';
import logo from '../../assets/logo.png';
import { NavLink, Link} from 'react-router-dom';

function Header() {
  return (
    <header className="kasa-header">
      {/* le logo mène vers la page d'accueil */}
      <Link to={"/"}>
        <img className='logo' src={logo} alt='logo'></img>
      </Link>
      
        <nav>
          <ul>
            <li>
            {/* si la page courante est bien le lien mentionné appliquer la classe active(underline)*/}
              <NavLink to="/" 
                className={({ isActive }) => (isActive ? 'active' : "link")}>
                Accueil
              </NavLink>
            </li>
            
            <li>
              <NavLink to="about" className={({ isActive }) => (isActive ? 'active' : "link")}>
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
