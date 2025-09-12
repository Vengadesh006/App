import React, { useState } from 'react'
import search from "../../assets/search.png"
import user1 from "../../assets/user.jpeg"
import { IoMdSearch } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { HiOutlineDotsVertical, HiPhone } from "react-icons/hi";
import upload from "../../assets/img.png"
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineFileUpload } from "react-icons/md";

export const Message = () => {

  const [user, setUser] = useState([
    {
      username: "deve",
      chat: "hai there how can assite with you.",
      img: user1
    },
    {
      username: "deve",
      chat: "hai there how can assite with you.",
      img: user1
    },
    {
      username: "deve",
      chat: "hai there how can assite with you.",
      img: user1
    },
    {
      username: "deve",
      chat: "hai there how can assite with you.",
      img: user1
    },
    {
      username: "deve",
      chat: "hai there how can assite with you.",
      img: user1
    },
    {
      username: "deve",
      chat: "hai there how can assite with you.",
      img: user1
    },
    {
      username: "deve",
      chat: "hai there how can assite with you.",
      img: user1
    },
    {
      username: "deve",
      chat: "hai there how can assite with you.",
      img: user1
    },


  ])

  const [texts, setText] = useState("")

  const ClickEvent = (e) => {
  
  
  }






  return (
    <div className='w-[72%] h-full min-h-full ' >
      <div className="w-full max-w-full h-full p-4 shadow-2xl flex justify-around alingment ">
        <div className="overflow-y-scroll">
          <div className="flex items-center sticky top-0 px-4 rounded-xl bg-blue-100">
            <img src={search} className='w-10' alt="" />
            <input type="text"
              placeholder='search..'
              className='py-2 px-4 w-full  rounded-sm outline-none placeholder:text-xl placeholder:tracking-wide'
            />
          </div>
          {/*  user details  */}
          <div className="bg-white">
            {user.map((info) => (
              <div className="flex items-center p-3 gap-3 hover:bg-stone-200 hover:rounded-xl">
                <img src={info.img} className='w-20 h-20 object-cover' style={{ borderRadius: "50%" }} alt="" />
                <div className="chat">
                  <h1 className='text-xl font-bold ' > {info.username} </h1>
                  <p className='text-gray-400' > {info.chat} </p>
                </div>

              </div>
            ))}
          </div>



        </div>
        {/* chat area  */}
        <div className=" relative px-10 py-4">
          <div className="flex justify-between">
            <div className="">
              <h1 className='text-3xl font-medium my-1' > Design Chat  </h1>
              <p className='text-gray-400' > 23 members, 10 online </p>
            </div>
            <div className="flex items-center gap-10 text-4xl">
              <p> <IoMdSearch /> </p>
              <p> <HiPhone /> </p>
              <p> <HiOutlineDotsVertical /> </p>

            </div>
          </div>



          <div className="absolute bottom-0 flex items-center w-[90%] max-w-full rounded-xl py-2 bg-gray-300 px-2">

            <label htmlFor="file" className='text-3xl ' > <MdOutlineFileUpload /> </label>
            <input type="file" id='file' hidden />

            <input type="text"
            placeholder='serach'
            className='py-2 px-4 w-full outline-none '
            onChange={(e) => setText(e.target.value)}
            onKeyDown={ClickEvent}
            />
            <p className='text-3xl mx-3 ' > <MdOutlineKeyboardVoice /> </p>
          <p className='text-3xl mx-3 '> <LiaTelegramPlane /> </p>
          </div>


        </div>


      </div>

    </div>
  )
}
