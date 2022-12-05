import './App.css';

import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Services' element={<Services/>} />
    </Routes>
    </>
  );
}

export default App;
