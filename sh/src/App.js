
import Dsp from "./components/Dsp";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/pages/cart/shop/shop";
import Cart from "./components/pages/cart/cart";
import About from "./components/pages/cart/about";
import Cards from "./components/Cardsss";

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  return (
    <div className="App">
      
<Router>
<Navbar />
<Dsp /><br></br>

<Cards />
<Routes>
  <Route path="/" element={<Shop/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>



<Footer />
</Router>
    



      
  
      
    </div>
  );
}




