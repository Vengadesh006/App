import React from 'react'
import { MdOutlineLogout, MdOutlineFileUpload, MdOutlineKeyboardVoice } from "react-icons/md";
import { IoMdChatboxes, IoMdSearch, IoMdClose } from "react-icons/io";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiEditBoxLine } from "react-icons/ri";
import { HiPhone, HiOutlineDotsVertical } from "react-icons/hi";
import { LiaTelegramPlane } from "react-icons/lia";
import { GrGallery } from "react-icons/gr";

export const Nav = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-24 bg-[#212023] flex flex-col items-center gap-30 py-10 px-3 text-[#8a8788] z-30 
        transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        sm:relative sm:translate-x-0 `}
    >
      {/* Logo */}
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z8kKaYZJaQ-eWMrwnNI2YMLdJggSzQv1kg&s"
          className="w-10 h-10 object-container"
          alt="logo"
        />
      </div>

      {/* Menu */}
      <ul className="flex flex-col items-center gap-5 overflow-y-scroll">
        <li className=" flex flex-col items-center cursor-pointer  hover:text-[#f1f1f1]  relative hover:bg-[#464646] transite-300 hover:rounded-lg px-6 py-4">
          <IoMdChatboxes className="text-[2.2rem]" />
          <span className="absolute top-0 right-2 text-xs bg-orange-500 text-[#8a8788] text-white px-2 py-2 rounded-full">
            23
          </span>
          <p className="text-xs mt-1">Chats</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer hover:text-[#f1f1f1] relative hover:bg-[#464646] hover:rounded-lg px-5 py-3">
          <FaFolder className="text-[2.2rem]" />
          <span className="absolute -top-1 right-2 text-xs bg-orange-500 text-[#8a8788] text-white px-3 py-2 rounded-full">
            4
          </span>
          <p className="text-xs mt-1">Work</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer  hover:text-[#f1f1f1] hover:bg-[#464646] hover:rounded-lg px-5 py-3">
          <FaFolderOpen className="text-[2.2rem]" />
          <p className="text-xs mt-1">Friends</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer  hover:text-[#f1f1f1] hover:bg-[#464646] hover:rounded-lg px-5 py-3">
          <FaFolderOpen className="text-[2.2rem]" />
          <p className="text-xs mt-1">News</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer  hover:text-[#f1f1f1] hover:bg-[#464646] hover:rounded-lg px-5 py-3">
          <FaFolderOpen className="text-[2.2rem]" />
          <p className="text-xs mt-1">Archive</p>
        </li>
        <div className="w-8 border-t border-gray-500 my-4"></div>
        <li className="flex flex-col items-center cursor-pointer  hover:text-[#f1f1f1] hover:bg-[#464646] hover:rounded-lg px-5 py-3">
          <IoPersonCircleOutline className="text-[2.2rem]" />
          <p className="text-xs mt-1">Profile</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer  hover:text-[#f1f1f1] hover:bg-[#464646] hover:rounded-lg px-5 py-3">
          <RiEditBoxLine className="text-[2.2rem]" />
          <p className="text-xs mt-1">Edit</p>
        </li>
      </ul>

      {/* Logout */}
      <div className="flex flex-col items-center cursor-pointer">
        <MdOutlineLogout className="text-2xl" />
        <p className="text-xs ">Logout</p>
      </div>
    </div>
  )
}
