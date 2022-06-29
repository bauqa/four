import React, {  useEffect, useState } from 'react'
import { db } from '../fr'
import { getDocs,collection, addDoc } from "firebase/firestore";
import SignOut from './SignOut'
function Chat() {
  const [messages,setMessages] = useState([])
  const userrefer = collection(db, "users")  
  const [newname,setnewname] = useState("")
  const [newmessage,setnewmessage] = useState(0)
  const newuser = async ()=>{
    await addDoc(userrefer, {name: newname, message: newmessage})
  }
  useEffect(()=>{
    const getUsers = async ()=> {
      const data = await getDocs(userrefer);
      console.log(data)
      setMessages(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getUsers()
  },[newuser])
  


  async function readdata(){
      
  }
  readdata()



  return (
    <div className='container'>
        <SignOut/>
        <input placeholder='>>>NAME' onChange={e=>setnewname(e.target.value)}/>
        <input placeholder='>>>MESSAGE' onChange={e=>setnewmessage(e.target.value)}/>
        <button onClick={newuser}>AUTH</button>
        {messages.map((el)=>{
          return <h1><span>Name:</span> {el.name} <span>Message:</span> {el.message}</h1>
        })}
    </div>
  )
}

export default Chat