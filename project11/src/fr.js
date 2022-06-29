import { initializeApp } from "firebase/app";
import { getFirestore,doc,setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const app = initializeApp({
    apiKey: "AIzaSyBpiFvWTuPZ64SBB1KxUPb8f-eOR-71oMI",
    authDomain: "chat-4be4a.firebaseapp.com",
    databaseURL: "https://chat-4be4a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-4be4a",
    storageBucket: "chat-4be4a.appspot.com",
    messagingSenderId: "2102208564",
    appId: "1:2102208564:web:4ce937b59640bcf7b08261"
});
const db = getFirestore(app)


const auth = getAuth()
export {auth,db}