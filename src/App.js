
import './App.css';
import Navbar from './layout/navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adduser from './users/Adduser';
import EditUser from './users/Edituser';
import Viewuser from './users/Viewuser';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<Adduser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<Viewuser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
