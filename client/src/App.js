import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Navbar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';



function App() {
 
   
 
  return (
    <div className="App">
       <Router>
      <div>
        <Nav  />
         

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />




        </Routes>
      </div>
    </Router>
      
      <Footer />
 

    </div>
  );
}

export default App;
