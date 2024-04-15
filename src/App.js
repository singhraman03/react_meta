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


function App(){
  return (
    <div className="App">
      <Nav/>
      <Promo/>
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Footer/>
    </div>
  )
};


export default App;