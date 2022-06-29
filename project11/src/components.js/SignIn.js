import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../fr'

function SignIn() {
    

    function signWithGoogle(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
  }
    
  return (
    <div className='container'>
        <button className='btn_sign' onClick={signWithGoogle}>Sign In by Google</button>
    </div>
  )
}

export default SignIn