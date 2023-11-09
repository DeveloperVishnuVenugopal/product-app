
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Register from './component/Register';
import Log from './component/Log';
import Product from './component/Product';

function App() {
  return (
    <div className="App">
      
      <Routes>
       <Route path='/' element={<Register/>}/>
       <Route path='/login' element={<Log/>}/>
       <Route path='/product' element={<Product/>}/>


      </Routes>

      
      
    </div>
  );
}

export default App;
