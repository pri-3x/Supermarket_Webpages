import React from "react";
import './App.css';
import Item1 from "./pages/Bowl.js";
import Item2 from './pages/FoxToy.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Item3 from './pages/Avacado.js';
import Item4 from './pages/Apple.js';
import Item5 from './pages/Combo1';
import Item6 from './pages/Combo2';
import Item7 from './pages/Combo3';
import Item8 from './pages/Mango';
import Item9 from './pages/Mouse';
import Item10 from './pages/Orange';
import Item11 from './pages/Plate4';
import Item12 from './pages/Plate1';
import Item13 from './pages/Rhino';
import Item14 from './pages/Deo';
import Item15 from './pages/Shampoo';
import Item16 from './pages/TubeCream';
import Item17 from './pages/Glass1';
import Item18 from './pages/Glass2';
import Item19 from './pages/Glass3';
import Item20 from './pages/Glass4';
import Item21 from './pages/Glass5';
import Item22 from './pages/Shoe1';
import Item23 from './pages/Shoe2';
import Item24 from './pages/Shoe3';


function App() {
  return (
    <div className="App">
      
    <Router>
      
    
      <Routes>
        <Route path="/" element={<Item1/>} />
        <Route path='/item2' element={<Item2/>}/>
        <Route path='/item3' element={<Item3/>}/>
        <Route path='/item4' element={<Item4/>}/>
        <Route path='/item5' element={<Item5/>}/>
        <Route path='/item6' element={<Item6/>}/>
        <Route path='/item7' element={<Item7/>}/>
        <Route path='/item8' element={<Item8/>}/>
        <Route path='/item9' element={<Item9/>}/>
        <Route path='/item10' element={<Item10/>}/>
        <Route path='/item11' element={<Item11/>}/>
        <Route path='/item12' element={<Item12/>}/>
        <Route path='/item13' element={<Item13/>}/>
        <Route path='/item14' element={<Item14/>}/>
        <Route path='/item15' element={<Item15/>}/>
        <Route path='/item16' element={<Item16/>}/>
        <Route path='/item17' element={<Item17/>}/>
        <Route path='/item18' element={<Item18/>}/>
        <Route path='/item19' element={<Item19/>}/>
        <Route path='/item20' element={<Item20/>}/>
        <Route path='/item21' element={<Item21/>}/>
        <Route path='/item22' element={<Item22/>}/>
        <Route path='/item23' element={<Item23/>}/>
        <Route path='/item24' element={<Item24/>}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
