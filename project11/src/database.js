
   
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const app = initializeApp({
  apiKey: "AIzaSyCb-VDXEtG-UCYG3z5YiG3s6U6Ng71FIFg",
  authDomain: "music-2e1bb.firebaseapp.com",
  projectId: "music-2e1bb",
  storageBucket: "music-2e1bb.appspot.com",
  messagingSenderId: "508775814928",
  appId: "1:508775814928:web:0390994f19e45e56877795"
});
const db = getFirestore(app)


const auth = getAuth()
export {auth,db}