import { Link } from 'react-router-dom';
import '../styles/App.css';
import worldsOfStarWars from '../images/worldsofstarwars.png';

function Nav() {
  return (
    <>
      <div className='header-container'>
        <img src={worldsOfStarWars} alt='nav-img' />
      </div>
      <div className='nav-header'>
        <Link to='/home' className='nav-link'>
          Planets
        </Link>
        <Link to='/residents' className='nav-link'>
          Residents
        </Link>
        <Link to='/contact' className='nav-link'>
          Contact
        </Link>
      </div>
    </>
  );
}

export default Nav;
