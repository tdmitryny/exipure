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
                <p className='Hero__para'>Exipure us unlike anything you’ve ever tried or expirienced in you life before.
                    <br/> It is the only product in the world with a proprietary blend of <span>8 exotic nutrients and plants</span> designed to rtarget low brown adipose tissue(BAT) levels, the new found root-cause of your<span> unexplained weight gain</span>. 
                   </p>
                    <Btn className="btn__hero"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionHero