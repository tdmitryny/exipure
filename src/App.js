
import './index.css';
import {useState} from 'react';
import SectionHero from './components/SectionHero';
import Header from './components/Header';
import Introduction from './components/Introduction';
import WorkWith from './components/WorkWith';
import Ingridients from './components/Ingridients';
import LimitedTime from './components/LimitedTime';
import Offer from './components/Offer';
import Footer from './components/Footer';

function App() {

    
  const month = new Date().getMonth();
  const monthes = ['January','February ','March','April', 'May', 'June', 'July', 'August', 'September', 'October','November','December' ]
  const getMonth = monthes[month];
  const day = new Date().getDate();
  const initialState = day + 'th' + ' ' +'of' + ' ' + getMonth;
  
  
  const [date, setDate]= useState(initialState) 


  return (
    <>
      
      <Introduction day={date}/>
      <SectionHero />
      <WorkWith />
      <Ingridients />
      <LimitedTime />
      <Offer />
      <Footer />
      
    </>
  );
}

export default App;
