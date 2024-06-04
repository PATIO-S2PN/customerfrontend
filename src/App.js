import './App.css';
import Login from './Pages/Login';
import MenuItems from './Pages/MenuItems';
import Register from './Pages/Register';
import MenuOne from './Pages/MenuOne';
import ResetPassword from './Pages/ResetPassword';
import Test1 from './Pages/Test1';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Components/Navbar';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
import Categories from './Pages/Categories';
import EmailVerification from './Components/EmailVerification';
import Specials from './Pages/Specials';
import PlaceOrder from './Pages/PlaceOrder';
import OrderTracking from './Pages/OrderTracking';
import Chefs from './Pages/Chefs';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Cartnew from './Pages/Cartnew';

function App() {  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/navbar" element={<Nav/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/menuitems" element={<MenuItems/>}/>
        <Route path="/menuone" element={<MenuOne/>}/>
        <Route path="resetpassword" element={<ResetPassword/>}/>
        <Route path="/test" element={<Test1/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/verify/:token" component={EmailVerification} />
        <Route path="/specials" element={<Specials/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
        <Route path="/order-tracking/:orderId" element={<OrderTracking/>}/>
        <Route path="/chefs" element={<Chefs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/cartnew" element={<Cartnew/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
