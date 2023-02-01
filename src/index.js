import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Disclaimer from './Pages/Disclaimer';
import TermsOfUse from './Pages/TermsOfUse';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ContactUs from './Pages/ContactUs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
     <Route path='/' element={<App />}/> 
     <Route path='disclaimer' element={<Disclaimer />}/> 
     <Route path='terms-of-use' element={<TermsOfUse />}/> 
     <Route path='privacy-policy' element={<PrivacyPolicy />}/> 
     <Route path='contact-us' element={<ContactUs />}/> 
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
