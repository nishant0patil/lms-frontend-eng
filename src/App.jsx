

import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/Notfound';



function App() {


  return (
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/about' element ={<Aboutus/>} />
      <Route path='*' element ={<Notfound/>} />
    </Routes>
  );
}

export default App;

