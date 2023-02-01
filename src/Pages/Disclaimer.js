import '../Style/Header.css';
import '../Style/Footer.css';
import '../Style/Policies.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Disclaimer() {
  return (
    <>
        <Header />
        <div className='Policy__container'>
         <div className='Policy__inner'>
          <h2 className='Policy__title'>Disclaimer</h2>
          <p className='Policy__par'>Your use of the site and the purchase of our product is subject to our Terms of Service, Privacy Policy and Medical Disclaimer.
           All content sold or provided by 5amworkout.com and its related companies are strictly for informational purposes only. While all attempts have been made to verify the accuracy of information provided on our website and within the publications, neither the authors nor the publishers are responsible for assuming liability for possible inaccuracies.</p>
           <p className='Policy__par'>The authors and publishers disclaim any responsibility for the inaccuracy of the content, including but not limited to errors or omissions. Loss of property, injury to self or others, and even death could occur as a direct or indirect consequence of the use and application of any content found herein.</p>
         </div>  
        </div>
        <Footer/>
     </>
  )
}

export default Disclaimer