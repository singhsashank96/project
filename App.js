
import './App.css';
import Item from './Componets/Itm';
import NavBar from './Componets/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Componets/Home';
import About from './Componets/About';
import Login from './Componets/Login';
import Contact from './Componets/Contact';

function App() {
  return (
   <>
  <Router>
   <NavBar />
  
   <Routes>
   <Route  path="/" element={<Home />}  />
   <Route  path="/About" element={<About />}  />
   <Route  path="/Contact" element={<Contact />}  />
   <Route  path="/Login" element={<Login />}  />

   </Routes>
   <Item    />
  

  
   </Router>
   
   </>
  );
}

export default App;
