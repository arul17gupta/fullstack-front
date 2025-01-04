
import './App.css';
import Navbar from './layout/navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adduser from './users/Adduser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adduser" element={<Adduser/>}/> 
      </Routes>
      {/* <Home/> */}

      </Router>
    </div>
  );
}

export default App;
