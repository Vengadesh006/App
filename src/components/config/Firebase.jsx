import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { doc, getFirestore, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCti35w1IIWjA0QCwK4Fvx-M3uurmLsJDk",
  authDomain: "chat-app-881e6.firebaseapp.com",
  projectId: "chat-app-881e6",
  storageBucket: "chat-app-881e6.firebasestorage.app",
  messagingSenderId: "929779826983",
  appId: "1:929779826983:web:be18cd81577f8a1d74a902",
  measurementId: "G-MZ0Z3WDY27"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)


export const signup = async (username, email, password) => {

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)

    const user = res.user;

  
    await setDoc(doc(db, "users", user?.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avater: "",
      bio: "Hey, there i am using chat app",
      lastSeen: Date.now()
    })

    await setDoc(doc(db, "chats", user?.uid), {
      chatData: []
    })

  }

  catch (error) {
    console.log(error.message);

  }


}

export const login = async (email, password) => {

  try{
    await signInWithEmailAndPassword(auth, email, password)
  }
  catch(error){
    console.log(error.message);
    
  }
}

export const logout = async () => {
    try{
        await signOut(auth)
    }
    catch(error){
      console.log(error.message);
    }
}