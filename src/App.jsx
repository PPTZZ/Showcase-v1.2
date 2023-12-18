import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Upload from "./components/Upload";
import './App.css'

export default function App () {
  return(
    <>
      <Routes>
        <Route path='/' element = { <Login/> } />
        <Route path="/register" element = { <Register/> } />
        <Route path="/profile" element = { <Profile/> } />
        <Route path="/upload" element = { <Upload/> } />
      </Routes>
    </>
  )
}
