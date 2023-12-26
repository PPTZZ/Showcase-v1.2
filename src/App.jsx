import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { Upload } from "./components/Upload";
import './App.css'

export const App = ()=> {
  return(
    <>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/upload" element={<Upload/>}/>
      </Routes>
    </>
  )
}
