import '../Style/Header.css';
import '../Style/Footer.css';
import '../Style/Policies.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactUs() {
  return (
    <>
        <Header />
        <div className='Policy__container'>
         <div className='Policy__inner'>
          <h2 className='Policy__title'>Contact us</h2>
          <p className='Policy__par'><span>Email:</span> contact@getexipure.com</p>
           <p className='Policy__par'><span>Phone:</span> 1-888-865-0815</p>
         </div>  
        </div>
        <Footer/>
     </>
  )
}

export default ContactUs