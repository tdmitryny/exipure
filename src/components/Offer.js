import '../Style/Offer.css';
import bottles from '../images/6bottles.png';
import secure from '../images/secure.png';
import Btn from './Btn';

function Offer() {
  return (
    <div className='Offer__container'>
        <div className='Offer__inner'>
        <div className='Offer'>
            <div className='Bottles'>
                <img className='Bottles__img' src={bottles} alt='Bottles images'/>
            </div>
            <div className='Offer__column'>
                <div className='Supply_offer'>
                   <p className='Six__Bottles'>6 BOTTLES</p>
                   <p className='Supply'>180 Day Supply</p>
               </div>
               <div className='Shipping'>
                   <p className='Free__Shipping'>FREE Shipping</p>
                   <p className='Bonuses'>2 FREE BONUSES</p>
               </div>
               <Btn className="Btn__style"/>
            </div>
        <p className='Sale'>65%OFF</p>
        </div>
        </div>

        
        
    </div>
  )
}

export default Offer