
import { Route, Router, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Registration } from './components/Registration'
import { Login } from './components/login'

function App() {
 

  return (
    <>
     <Navbar/>
<Routes>
  <Route  path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/signUp" element={<Registration/>} />
  <Route path="/login" element={<Login/>} />
</Routes>
    </>
  )
}

export default App
