import './App.css';
import Login from './Pages/Login';
import MenuItems from './Pages/MenuItems';
import Register from './Pages/Register';
import MenuOne from './Pages/MenuOne';
import ResetPassword from './Pages/ResetPassword';
import Test1 from './Pages/Test1';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminMenu from './Pages/AdminMenu';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/menuitems" element={<MenuItems/>}/>
        <Route path="/menuone" element={<MenuOne/>}/>
        <Route path="resetpassword" element={<ResetPassword/>}/>
        <Route path="/test" element={<Test1/>}/>
        <Route path="/admin-menu" element={<AdminMenu/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
