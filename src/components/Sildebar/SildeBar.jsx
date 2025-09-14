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

export const SildeBar = () => {
  const user = [
    { name: "Tanisha Combs", Img: img1, type: "admin" },
    { name: "Alex Hunt", Img: img2 },
    { name: "Jasmin Lowery", Img: img3 },
    { name: "Max Paaila", Img: img4 },

  ]

  const group = [
    { icon: <FiVideo />, name: "13 Videos" },
    { icon: <CiFileOn />, name: "24 Files" },
    { icon: <MdOutlineAudiotrack />, name: "10 Audios" },
    { icon: <IoLink />, name: "7 Links" },
    { icon: <MdOutlineKeyboardVoice />, name: "4 Voice Notes" }
  ]

  return (
    <div className="h-full w-full flex flex-col  rounded-3xl bg-white">
      {/* Shared Files Section */}
      <div className="border-b px-4 py-3">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold"> Group Info </h1>
          <button className="text-gray-500 hover:text-red-500 text-2xl">
            <IoMdClose />
          </button>
        </div>
        <ul className="space-y-3">
          {group.map((item, i) => (
            <li key={i} className="flex items-center justify-between group cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-1">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-gray-600 group-hover:text-blue-500">{item.icon}</span>
                <span className="text-base font-medium">{item.name}</span>
              </div>
              <IoIosArrowDown className="text-gray-500" />
            </li>
          ))}
        </ul>
      </div>

      {/* Members Section */}
      <div className="flex-1 px-4 py-3 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">23 Members</h1>
          <button className="text-gray-500 hover:text-red-500 text-2xl">
            <IoMdClose />
          </button>
        </div>
        <ul className="space-y-4">
          {user.map((item, i) => (
            <li key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <img
                src={item.Img}
                className="w-12 h-12 rounded-xl object-cover"
                alt={item.name}
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{item.name}</span>
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
