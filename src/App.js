import './App.css';
import { Login } from './Login/Login';
import Listado from './Listado/Listado';
import {Route, Routes} from 'react-router-dom'
import Detalle from './MovieDetail/Detalle';
import Resultados from './Buscador/Resultados';

function App() {
  return (
    <> 
   <Routes> 
      <Route path='/' element = {<Login/> }/>
      <Route path='listado' element = {<Listado/> } />
      <Route path ='/detalle' element = {<Detalle/>} />
      <Route path ='/resultados' element = {<Resultados/>} />
      </Routes>
     </>
    
  );
};

export default App;
