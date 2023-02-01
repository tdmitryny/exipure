import '../Style/Footer.css';
//import Disclaimer from '../Pages/Disclaimer';
import {Link} from 'react-router-dom';
import '../Style/Header.css';

function Links() {

    
  return (
           <ul className='Menu__bottom'>
                <li className='Menu__list'><Link className='List__link' to='/disclaimer'>Disclamer</Link></li>
                <li className='Menu__list'><Link className='List__link' to='/terms-of-use'>Terms of Use</Link></li>
                <li className='Menu__list'><Link className='List__link' to='/privacy-policy'>Privacy Policy</Link></li>
                <li className='Menu__list'><Link className='List__link' to='/contact-us'>Contact Us</Link></li>
            </ul>
  )
}

export default Links