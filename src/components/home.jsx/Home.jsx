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
        <div className="w-full min-h-screen flex items-center justify-center p-4 bg-gray-100">
            <div className="w-[92%] h-[680px] max-w-7xl min-h-full shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[90px_2.6fr_1.2fr] bg-white">
                <Nav />
                <Message />
                <SildeBar />
            </div>
        </div>


    )
}
