import '../Style/Header.css';
import '../Style/Footer.css';
import '../Style/Policies.css';

import Footer from '../components/Footer';

function ContactUs() {
  return (
    <>
        
        <div className='Policy__container'>
         <div className='Policy__inner'>
          <h2 className='Policy__title'>Contact us</h2>
          <p className='Policy__par'><span>Email:</span> info@5amworkout.com</p>
           <p className='Policy__par'><span>Phone:</span> 1-201-898-0666</p>
         </div>  
        </div>
        <Footer/>
     </>
  )
}

export default ContactUs