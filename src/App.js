import './App.css';
import { Login } from './Login/Login';
import Listado from './Listado/Listado';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <> 
   <Routes> 
      <Route path='/' element = {<Login/> }/>
      <Route path='listado' element = {<Listado/> } />
      </Routes>
     </>
    
  );
};

export default App;
