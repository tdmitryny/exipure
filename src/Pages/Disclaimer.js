import '../Style/Header.css';
import '../Style/Footer.css';
import '../Style/Policies.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Disclaimer() {
  return (
    <>
       
        <div className='Policy__container'>
         <div className='Policy__inner'>
          <h2 className='Policy__title'>Disclaimer</h2>
          <p className='Policy__par'>This website participates in various affiliate programs, which means that We may earn a commission from qualifying purchases made through links on this site. This commission comes at no additional cost to you and helps support the maintenance and development of this website. </p>
          
         </div>  
        </div>
        <Footer/>
     </>
  )
}

export default Disclaimer