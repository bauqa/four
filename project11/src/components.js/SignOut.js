import React from 'react'
import { auth } from '../fr'
function SignOut() {
  return (
    <div className='container'>
        <button className='btn_sign yellow' onClick={()=>auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default SignOut