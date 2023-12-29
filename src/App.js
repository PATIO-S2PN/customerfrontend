import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
