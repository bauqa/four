import { getDocs,collection,addDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import './Home.css'
import { auth, db } from '../database'
import { useAuthState } from 'react-firebase-hooks/auth';
function Home() {
  const [messages, setMessages] = useState([])
  const [user] = useAuthState(auth)
  const [news,setNews] = useState("")
  const userrefer = collection(db, "messages");
  
  const newMessage = async ()=>{
    await addDoc(userrefer, {name: user.displayName, message: news})
  }
  useEffect(()=>{
    const getMessages = async ()=>{
      const data = await getDocs(userrefer);
      setMessages(data.docs.map(doc=>({...doc.data(),id:doc.id})))
    }
    getMessages()
  },[newMessage])

  return (
    <div>
      <input className='input' value={news} onChange={e=>setNews(e.target.value)}/>
      <button onClick={newMessage}>Send</button>
      <div className='cards'>
        
      {messages.map((item,idx)=>{
        return <div className='card' key={idx}>
        <h1 className='name_card'>{item.name}</h1>
        <h1 className='name_card'> message: {item.message}</h1>
      </div>
      
      })}
      </div>
    </div>
  )
}

export default Home