import React from 'react'
import { MdOutlineLogout, MdOutlineFileUpload, MdOutlineKeyboardVoice } from "react-icons/md";
import { IoMdChatboxes, IoMdSearch, IoMdClose } from "react-icons/io";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiEditBoxLine } from "react-icons/ri";
import { HiPhone, HiOutlineDotsVertical } from "react-icons/hi";
import { LiaTelegramPlane } from "react-icons/lia";
import { GrGallery } from "react-icons/gr";

export const Nav = ({showSidebar,setShowNavbar, showNavbar}) => {
  return (
       <div
          className={`h-full w-[100px] sm:w-full absolute sm:relative z-20 bg-[#1B1212] text-white flex flex-col items-center py-6 justify-between transform transition-transform duration-300 ${
            showNavbar ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
          }`}
        >
          {/* Logo */}
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z8kKaYZJaQ-eWMrwnNI2YMLdJggSzQv1kg&s"
              className="w-12 h-12 object-contain"
              alt="logo"
            />
          </div>

          {/* Menu */}
          <ul className="flex flex-col items-center gap-6">
            <li className="flex flex-col items-center cursor-pointer relative">
              <IoMdChatboxes className="text-2xl" />
              <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                23
              </span>
              <p className="text-xs mt-1">Chats</p>
            </li>
            <li className="flex flex-col items-center cursor-pointer relative">
              <FaFolder className="text-2xl" />
              <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                4
              </span>
              <p className="text-xs mt-1">Friends</p>
            </li>
            <li className="flex flex-col items-center cursor-pointer">
              <FaFolderOpen className="text-2xl" />
              <p className="text-xs mt-1">News</p>
            </li>
            <li className="flex flex-col items-center cursor-pointer">
              <FaFolderOpen className="text-2xl" />
              <p className="text-xs mt-1">Archive</p>
            </li>
            <div className="w-8 border-t border-gray-500 my-4"></div>
            <li className="flex flex-col items-center cursor-pointer">
              <IoPersonCircleOutline className="text-2xl" />
              <p className="text-xs mt-1">Profile</p>
            </li>
            <li className="flex flex-col items-center cursor-pointer">
              <RiEditBoxLine className="text-2xl" />
              <p className="text-xs mt-1">Edit</p>
            </li>
          </ul>

          {/* Logout */}
          <div className="flex flex-col items-center cursor-pointer">
            <MdOutlineLogout className="text-2xl" />
            <p className="text-xs mt-1">Logout</p>
          </div>
        </div>
  )
}
