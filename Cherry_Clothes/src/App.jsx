
import { useEffect } from 'react'
import './App.css'
import {Header} from './Components/Header.jsx'; 
function App() {
const getUser = ()=>{
  fetch('http://localhost:3000/api/users')
  .then(res=>res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
}
useEffect(()=>{
  getUser(); 
},[]) 



  return (
     <Header />
    
    )
  
}

export default App
