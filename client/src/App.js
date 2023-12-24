import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Navbar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from '../src/context/authContext';
import Profile from './components/Profile';
import Private from './routes/Private';


function App() {
 
   
 
  return (
    <AuthProvider>
    <div className="App">
       <Router>
      <div>
        <Nav  />
         

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/profile" element={<Private />}>
            <Route path="" element={<Profile />} />  
            </Route>






        </Routes>
      </div>
    </Router>
      
      <Footer />
 

    </div>
    </AuthProvider>
  );
}

export default App;
