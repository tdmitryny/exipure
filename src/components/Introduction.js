import '../Style/Introduction.css';


function Introduction({day}) {


  return (
    <div className='Section__intro'>
        <div className='Intro'>
           <p className='Date'> <span className='day'>{day}</span> Exclusive Offer <span>95% OFF</span></p>
             <h2 className='Intro__exi'>Introducing <span>Exipure</span></h2>
             <p className='Intro__param'>Next Generation in healthy <span>weight loss suppliment </span>
              with <span>8 exotic nutrients</span> and plants backed by clinical research. <span>Exipure </span>is unlike anything you've ever tried or experienced in your life before.</p>
        </div>
        </div>
  )
}

export default Introduction