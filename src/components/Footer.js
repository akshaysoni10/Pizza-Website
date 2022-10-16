import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='footer-container'>
      <h2 className='order'>Order Now</h2>
      <p className='order-li'>
      Pizza <br/>
      Drinks <br/>
      Dessert 
      </p>
      <h2 className='about'>About Us</h2>
      <p className='about-li'>
      About Us <br/>
      Best Delivery <br/>
      Nutrition 
      </p>
      <h2 className='policy'>Our Policies</h2>
      <p className='policy-li'>
      Terms & Conditions <br/>
      FAQs <br/>
      Help 
      </p>

      <h2 className='feedback-txt'>For Better Serves</h2>
      <button className='fdbk-btn'>Give Feedback</button>

      <h2 className='follow'>Follow Us</h2>
      <div class="social-container">
      <h3>Social Follow</h3>
      <a href="#"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="#"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>

      <h1 className='thank-txt'>"I hope you all are enjoyed here, thank you for coming!!!"</h1>
    </div>
  )
}

export default Footer
