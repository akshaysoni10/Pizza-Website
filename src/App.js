import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Deal from "./components/Deal";
import Offer from "./components/Offer"
import logo from "./images/logo.png";
import chef from "./images/chef.webp";
import small from "./images/small.jpg"
import medium from "./images/medium.jpg"
import large from "./images/large.jpg"
import thankyou from "./images/thankyou.jpg"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={logo} className="logo" alt="pizza" />
      <h1 className="heading">Pizza House</h1>
      <br />
      <p className="content">
        Pizza, dish of Italian origin consisting of a flattened disk of bread
        dough topped with some combination of olive oil, oregano, tomato,
        olives, mozzarella or other cheese, and many other ingredients, baked
        quickly—usually, in a commercial setting, using a wood-fired oven heated
        to a very high temperature—and served hot.
      </p>
      <h2 className="caption">“A pizza slice a day keeps sadness away.”</h2>
      <img src={chef} className="chef" alt="chef"/>
      <Card/>
      <br/>
      <Deal/>
      <img src={small} className="small" alt="small-pizza"/>
      <img src={medium} className="medium" alt="medium-pizza"/>
      <img src={large} className="large" alt="large-pizza"/>
      <Offer/>
      <Footer/>
      <img src={thankyou} className="thanks" alt="Thank-you"/>
    </div>
  );
}

export default App;
