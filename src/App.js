import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./styles/style.css";
import Home from "./Pages/Home";
import BensuMenu from "./Pages/BensuMenu";
import Navbars from "./Components/Navbars";
import UserProfile from "./Pages/UserProfile";
import CartOrder from "./Pages/CartOrder";
import EditProfile from "./Pages/EditProfile";
import HomeAdmin from "./Pages/Admin/HomeAdmin";
import AddProduct from "./Pages/Admin/AddProduct";
import ProfileAdmin from './Pages/Admin/ProfileAdmin'

import { LoginContext } from "./Contexts/LoginContext";
import { CartContext } from "./Contexts/CartContext";
import EditAdmin from "./Pages/Admin/EditAdmin";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [dataCart, setDataCart] = useState([]);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <CartContext.Provider value={{ dataCart, setDataCart }}>
        <Router>
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart-order" element={<CartOrder />} />
            <Route path="/bensu-menu" element={<BensuMenu />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/home-admin" element={<HomeAdmin />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/profile-admin" element={<ProfileAdmin />} />
            <Route path='/edit-admin' element={<EditAdmin />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
