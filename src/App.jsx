import "./App.css"
import { Route, Routes } from "react-router-dom"
import Landing from "./pages/landing.page"
import Home from "./pages/home.page"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default App
