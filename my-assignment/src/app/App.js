/*import logo from './logo.svg';
import './App.css';*/

import Login from "../pages/Login";
import Product from "../pages/ProductManage";
import Cart from "../pages/CartManage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="cart" element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;
