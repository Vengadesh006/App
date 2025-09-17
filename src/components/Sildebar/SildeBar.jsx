import React from 'react'
import { IoMdClose } from "react-icons/io";
import img1 from '../../assets/m1.jpg'
import img2 from '../../assets/m2.jpg'
import img3 from '../../assets/m3.jpg'
import img4 from '../../assets/m4.jpg'
import img5 from '../../assets/m5.jpg'
import img6 from '../../assets/m6.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { FiVideo } from "react-icons/fi";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineAudiotrack } from "react-icons/md";
import { IoLink } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"

export const SildeBar = () => {
  const user = [
    { name: "Tanisha Combs", Img: img1, type: "admin" },
    { name: "Alex Hunt", Img: img2 },
    { name: "Jasmin Lowery", Img: img3 },
    { name: "Max Paaila", Img: img4 }
  ]

  const group = [
    { icon: <FiVideo />, name: "13 Videos" },
    { icon: <CiFileOn />, name: "378 Files" },
    { icon: <MdOutlineAudiotrack />, name: "10 Audios files " },
    { icon: <IoLink />, name: "25 shared links" },
    { icon: <MdOutlineKeyboardVoice />, name: "2589 Voice message" }
  ]

  return (
    <div className="h-full w-full flex hidden md:block flex-col  bg-transpraent">
      {/* Shared Files Section */}
      <div className="border bg-white rounded-4xl overflow-hidden max-w-xs mb-2 px-4 py-3">
        <div className="flex justify-between items-center my-4">
          <h1 className="text-3xl font-semibold"> Group Info </h1>
         
          <button className="text-gray-500 hover:text-red-500 text-2xl">
            <IoMdClose />
          </button>
        </div>
         <h1 className="text-lg font-bold my-3">Files</h1>
         
          <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-1">
              <div className="flex items-center gap-3 my-3">
                <span className="text-2xl text-gray-600 group-hover:text-blue-500"> <GrGallery /> </span>
                <span className="text-base font-medium"> 265 Photo </span>
              </div>
              <IoIosArrowDown className="text-black text-2xl" />
             
            </div>
             <div className="flex gap-3 my-3">
                <img src={room1} className='w-40 h-20 object-cover rounded-2xl ' alt="" />
                <img src={room2} className='w-40 h-20 object-cover rounded-2xl ' alt="" />
              </div>

        <ul className="space-y-3">
          {group.map((item, i) => (
            <li key={i} className="flex items-center justify-between group cursor-pointer mb-3 hover:bg-gray-100 rounded-lg px-2 py-1">
              <div className="flex items-center my-1 gap-3">
                <span className="text-2xl  ">{item.icon}</span>
                <span className="text-base font-medium">{item.name}</span>
              </div>
              <IoIosArrowDown className="text-black text-2xl" />
            </li>
          ))}
        </ul>
      </div>

      {/* Members Section */}
      <div className="flex-1 px-4 py-3 overflow-y-auto max-w-xs rounded-4xl bg-[#dbdcfe] ">
        <div className="flex mt-4 mb-3 justify-between items-center">
          <h1 className="text-xl font-bold my-3 mx-2">23 Members</h1>
          <button className="text-gray-500  text-2xl">
            <IoMdClose />
          </button>
        </div>
        <ul className="space-y-4">
          {user.map((item, i) => (
            <li key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <img
                src={item.Img}
                className="w-14 h-16 rounded-xl object-cover"
                alt={item.name}
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{item.name}</span>
                {item.type && (
                  <span className="text-xs font-medium text-gray-400 uppercase">{item.type}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
