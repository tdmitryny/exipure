import '../Style/SectionHero.css';
import herobottle from '../images/herobottle.png'
import Btn from './Btn';
function SectionHero() {
  return (
    <div className='Section__hero'>
        <div className='Hero'>
            <div className='Hero__block'>
                <img className='Hero__img' src={herobottle} alt="Hero bottle"/>
                <div className='Here__second-block'>
                <h1 className='Hero__title'>The Tropical Secret For Health</h1>
                <p className='Hero__para'>Puravive is a dietary supplement designed to effectively reduce excess body fat, promoting a lean and fit physique. Consistent use of this supplement facilitates the reduction of unwanted fat, allowing you to achieve the desired results with minimal effort.
      
                   </p>
                    <Btn className="btn__hero"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionHero