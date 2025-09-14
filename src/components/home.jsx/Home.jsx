import React, { useContext, useEffect } from 'react'
import { Nav } from '../nav/Nav'
import { Message } from '../message/Message'
import { SildeBar } from '../Sildebar/SildeBar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../config/Firebase'
import { AppContext } from '../contexts/AuthContextProvider'

export const Home = () => {

    const {loadUserData, userData} = useContext(AppContext)

    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            loadUserData(user?.uid)
        })

    },[])



    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4 " >
            <div className="w-[92%] h-[680px] max-w-7xl min-h-full shadow-xl gap-2 p-5 rounded-2xl overflow-hidden grid grid-cols-[80px_2fr] md:grid-cols-[90px_2.6fr_1.2fr] bg-white"
            style={{background : "#1B1212"}}
            >
                <Nav />
                <Message />
                <SildeBar />
            </div>
        </div>


    )
}
