
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Home from './component/Home';
import Navbar from './component/Navbar';
// import Navbar from "./component/Navbar";

function App() {
return( 
    <>
    <BrowserRouter>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
</Routes>
<Routes>
  <Route path='/cart' element={<Cart/>} />
</Routes>

    </BrowserRouter>
    </>
  


);
}

export default App;
