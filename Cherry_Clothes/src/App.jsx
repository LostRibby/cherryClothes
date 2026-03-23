
import { useEffect } from 'react'
import './App.css'
import {Header} from './Components/Header.jsx'; 
import {Main} from './Components/Main.jsx';
import {Login} from './Components/login.jsx';
import {AuthProvider} from './Components/AuthContext.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
        <Route path="/login" element={<Login />} />
        {/* Autres routes */}
      </Routes>
      
    </Router>
 </AuthProvider>
    )
  
}

export default App
