import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

function Contact(){
  return(
    <div>
      <h1 className='contact-part'>For further information please, Contact Here</h1>
    </div>
  );
}

function Home(){
  return(
    <div>
      <h1 className='home-part'>Home Page</h1>
    </div>
  );
}

function About(){
  return(
    <div>
      <h1 className='about-part'>About Page</h1>
    </div>
  );
}

function Details(){
  return(
    <div>
      <h1 className='details-part'>For more Details</h1>
    </div>
  );
}


