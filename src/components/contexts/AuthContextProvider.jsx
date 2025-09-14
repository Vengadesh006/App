import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '../config/Firebase'

export const AppContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    const [chatData, setChatData] = useState(null)

    const loadUserData = async (uid) => {
        try {
            const userRef = doc(db, "users", uid)
            const userSnap = await getDoc(userRef)
            setUserData(userSnap.data())
        } catch (error) {
            console.error("Error loading user data:", error)
        }
    }

    const value = {
        userData,
        setUserData,
        chatData,
        setChatData,
        loadUserData,
    }


    useEffect(() => {

       if(userData){

        const userRef = doc(db, "chats", userData?.id)

        const unsubscribe = onSnapshot(userRef, async (snapshort) => {
            const cardItems = snapshort.data().chatData;
           
            const message = []

            for(const item of cardItems){

                try{
                    const userRef = doc(db, "users", item?.id)
                    const userSnap = await getDoc(userRef)
                    const userInfo = userSnap.data()
                    message.push({...item, userInfo})
                }
                catch(error){
                    console.log(error.message);
                    
                }
            }

            message.sort((a, b) => b.updatedAt - a.updatedAt )
            
        })

        return () => unsubscribe()

       }
       

    },[userData])


   


return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
)
}
