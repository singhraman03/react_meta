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
import image from "./image.png";
import Card from "./Components/Card";
import Btn from "./Components/Btn";
import ModeToggler from "./Components/ModeToggler";
import Button from './Components/Button';

function Logo(props){
  const myLogo = <img src= {image}/>;
  return myLogo;
}


function App(){
  return (
    <div className="App">
      <Logo/>
      <h1> Task: Add three card elements </h1>
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="second card's h2" h3="second card's h3"/>
      <Card h2="third card's h3" h3="third card's h3"/>

      <> 
      <Btn className='button'/>
      </>
      <ModeToggler/>
      <Button/>

      
      <Nav name="Anna" color="green"/>
      <Promo />
      <Intro1 type="gender"/>
      <Intro2 type="business"/>
      <Intro3 type="like"/>
      <Footer name="shopping cart" color="blue"/>
    </div>
  )
};


export default App;