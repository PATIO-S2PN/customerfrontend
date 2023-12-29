import './App.css';
import Login from './Pages/Login';
import MenuItems from './Pages/MenuItems';
import Register from './Pages/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/menuitems" element={<MenuItems/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
