
import { useEffect } from 'react'
import './App.css'
import {Header} from './Components/Header.jsx'; 
import {Main} from './Components/Main.jsx';
import {RegisterForm} from './Auth/Register.jsx'
import {AuthProvider} from './Auth/AuthContext.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Auth/login.jsx';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};
const App= () =>{

 



  return (
    
    <AuthProvider>
  <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<RegisterForm/>}/>
        {/* Autres routes */}
      </Routes>
    </Router>
 </AuthProvider>
     )
  
}

export default App
