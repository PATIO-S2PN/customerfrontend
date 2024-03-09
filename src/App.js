import './App.css';
import Login from './Pages/Login';
import MenuItems from './Pages/MenuItems';
import Register from './Pages/Register';
import MenuOne from './Pages/MenuOne';
import ResetPassword from './Pages/ResetPassword';
import Test1 from './Pages/Test1';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Main from './Pages/Main';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/navbar" element={<Navbar/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/menuitems" element={<MenuItems/>}/>
        <Route path="/menuone" element={<MenuOne/>}/>
        <Route path="resetpassword" element={<ResetPassword/>}/>
        <Route path="/test" element={<Test1/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/categories" element="<Categories/>"/>  
      </Routes>
     </Router>
    </div>
  );
}

export default App;
