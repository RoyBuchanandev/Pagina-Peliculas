import './App.css';
import { Login } from './Login/Login';
import Listado from './Listado/Listado';
import {Route, Routes} from 'react-router-dom'
import Nav from './Nav/Nav';
import Detalle from './MovieDetail/Detalle';

function App() {
  return (
    <> 
    <Nav />
   <Routes> 
      <Route path='/' element = {<Login/> }/>
      <Route path='listado' element = {<Listado/> } />
      <Route path ='/detalle' element = {<Detalle/>} />
      </Routes>
     </>
    
  );
};

export default App;
