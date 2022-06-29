import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import Home from './pages/Home'
import { auth } from './database'
import SignIn from './pages/SignIn';
function Nav() {
  const [user] = useAuthState(auth);
  
  return (
    <div>
      
      {user ? <Home/> : <SignIn/>}
      
    </div>
  )
}

export default Nav