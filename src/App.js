// function Nav(){
//   return (
//     <nav className="Main-Nav">
//       <ul>
//         <li>Home</li>
//         <li>Articles</li>
//         <li>contact</li>
//         <li>About</li>
//       </ul>
//     </nav>
//   )};
// export default Nav
import React from 'react';
import Nav from "./Components/Nav";
import Promo from './Components/Promo';
import Intro1 from "./Components/Intro1";
import Intro2 from "./Components/Intro2";
import Intro3 from "./Components/Intro3";
import Footer from "./Components/Footer";
import "./App.css";
import "./index.js";
// import image from "./image.png";
import Card from "./Components/Card";
import Btn from "./Components/Btn";
import ModeToggler from "./Components/ModeToggler";
import Button from './Components/Button';
import InputComponent from './Components/InputComponent';
import RegisterForm from './Components/RegisterForm';
import ApiCalls from './Components/ApiCalls';
import Fruits from './Components/Fruits';
import FruitsCounter from './Components/FruitsCounter';
import Contact from './Components/Contact';
import Homepage from './Components/Homepage';
import AboutMe  from './Components/AboutMe';
// import {routes, route, Link} from 'react-router-dom';
import Displaypic from './Components/Displaypic';




// function Logo(props){
//   const myLogo = <img src= {image}/>;
//   return myLogo;
// }


function App(){
  return (
    <>
      <nav className='Nav-items'>
        <link to="/" className="Nav-items">Homepage</link>
        <link to="/About" className='Nav-items'>About Me</link>
        <link to="/Contact" className='Nav-items'>Contact</link>
      </nav>
      <routes>
        <route path="/" element={<Homepage/>}></route>
        <route path="/AboutMe" element={<AboutMe/>}></route>
        <route path="/Contact" element={<Contact/>}></route>
      </routes>
      
      <h1> Task: Add three card elements </h1>
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="second card's h2" h3="second card's h3"/>
      <Card h2="third card's h3" h3="third card's h3"/>

      <Displaypic/>

       
      <Btn className='button'/>
      
      <ModeToggler/>
      <Button/>
      <InputComponent/>
      <RegisterForm/>
      <ApiCalls/>
      <h1>Where should the state go?</h1>
      <Fruits Fruits= {Fruits}/>
      <FruitsCounter Fruits= {Fruits}/>

      
      <Nav name="Anna" color="green"/>
      <Promo />
      <Intro1 type="gender"/>
      <Intro2 type="business"/>
      <Intro3 type="like"/>
      <Footer name="shopping cart" color="blue"/>
    </>
    
  )
};


export default App;