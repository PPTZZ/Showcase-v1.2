import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { useEffect } from "react";
import { usePostsContext } from './hooks/usePostsContext';
import { useAuthContext } from "./hooks/useAuthContext";
import './App.css'


export const App = ()=> {
  
  const { dispatch } = usePostsContext();
  const { user } = useAuthContext();
    
  useEffect(()=>{
    const fetchPosts = async() =>{
        const response = await fetch('http://localhost:5000/api/posts',{
          headers:{
            'Authorization': `Bearere ${user.token}`
          }
        });
        const json = await response.json()

        if(response.ok){
          dispatch({type: 'SET_POSTS', payload: json})
        }
    }
    if(user){
      fetchPosts()
    }
},[dispatch, user])

  return(
    <>

      <Routes>
          <Route path="/" element={user ? <Profile/> : <Navigate to={'login'}/>}/>
          <Route path="/login" element={!user ? <Login/> : <Navigate to={'/'}/>}/>
          <Route path="/register" element={!user ? <Register/> : <Navigate to={'/'}/>}/>
      </Routes>
    </>
  )
}
