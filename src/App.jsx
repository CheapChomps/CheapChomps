import './App.css'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import HowThisWorks from "./pages/HowThisWorks.jsx"
import Login from "./pages/Login.jsx"
import Pantry from "./pages/Pantry.jsx"

import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'




function App() {


  return (
    <div className="App">
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HowThisWorks" element={<HowThisWorks />} />
          <Route path="/Pantry" element={<Pantry />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
