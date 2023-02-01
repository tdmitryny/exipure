import '../Style/Footer.css';
import Links from './Links';


function Footer() {
  return (
    <section className='Footer'>
        <div className='Policies'>
           <Links /> 

        </div>
            <p className='Copyright'>
            ©Copyright 2022 5amworkout.com All Rights Reserved.
            </p>

    </section>
  )
}

export default Footer