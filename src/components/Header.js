import '../Style/Header.css';
import logo from '../images/logo.jpg';
import Btn from './Btn';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='Header'>
      <div className='Logo'>
        <Link to='/'><img className='Logo__img' src={logo} alt="logo" / ></Link>
      </div>
      <nav className='Nav'>
        <ul className='List__menu'>
          <li className='List'><a className='List__link' href='https://hop.clickbank.net/?affiliate=tdmitry211&vendor=exipure&pg=spd&sr=1'>Benefits</a></li>
          <li className='List'><a className='List__link' href='#ing'>Ingredients</a></li>
          <li className='List'><a className='List__link' href='https://hop.clickbank.net/?affiliate=tdmitry211&vendor=exipure&pg=spd&sr=1'>Learn more</a></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header