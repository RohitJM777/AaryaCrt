
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Products from "./component/Products";
import Login from "./component/Login"
import Register from "./component/Register"
import Home from "./component/Home"
import { AuthContextProviderWrapper } from "./context/AuthContext";
import Cart from "./component/Cart";
import { CartContextWrapper } from "./context/CartContext";
function App(){
  return (
    <>
    <AuthContextProviderWrapper>
     <Router>
       <Routes>
        <Route path="/products" element={<CartContextWrapper><Products /></CartContextWrapper>} />
        <Route path="/cart" element={<CartContextWrapper><Cart /></CartContextWrapper>} /> 
      
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Login />} />
       </Routes>
     </Router>
     </AuthContextProviderWrapper>
    </>
  )
}

export default App; 