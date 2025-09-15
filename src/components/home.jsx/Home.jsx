import React, { useContext, useEffect } from 'react'
import { Nav } from '../nav/Nav'
import { Message } from '../message/Message'
import { SildeBar } from '../Sildebar/SildeBar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../config/Firebase'
import { AppContext } from '../contexts/AuthContextProvider'

export const Home = () => {

    const { loadUserData, userData } = useContext(AppContext)


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            loadUserData(user?.uid)
        })

    }, [])



    return (
        <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10 bgimage">
            <div
                className="
            w-full h-auto max-w-7xl shadow-xl gap-4 rounded-2xl overflow-hidden p-4
            grid 
            grid-cols-1
            sm:grid-cols-[60px_1fr] 
            md:grid-cols-[80px_2fr_1fr] 
            bg-white
            "
                style={{ background: "#1B1212" }}
            >
                {/* Left navigation (sticky on larger screens) */}
                <div className="hidden sm:block">
                    <Nav />
                </div>

                {/* Main messages */}
                <div className="col-span-1 sm:col-span-1 md:col-span-1">
                    <Message />
                </div>

                {/* Sidebar (hidden on small screens, visible on md+) */}
                <div className="hidden md:block">
                    <SildeBar />
                </div>
            </div>
        </div>

    )
}
