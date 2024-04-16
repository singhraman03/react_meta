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


function App(){
  return (
    <div className="App">
      <Nav name="Anna" color="green"/>
      <Promo greet="Honey"/>
      <Intro1 type="gender"/>
      <Intro2 type="business"/>
      <Intro3 type="like"/>
      <Footer name="shopping cart" color="blue"/>
    </div>
  )
};


export default App;