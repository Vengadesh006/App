import React, { useState } from "react";
import { IoMdChatboxes, IoMdSearch, IoMdClose } from "react-icons/io";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiEditBoxLine } from "react-icons/ri";
import { MdOutlineLogout, MdOutlineFileUpload, MdOutlineKeyboardVoice } from "react-icons/md";
import { HiPhone, HiOutlineDotsVertical } from "react-icons/hi";
import { LiaTelegramPlane } from "react-icons/lia";
import { GrGallery } from "react-icons/gr";

const ChatApp = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-2 sm:p-4">
      <div className="w-full h-[680px] max-w-7xl shadow-xl rounded-2xl overflow-hidden grid 
        grid-cols-1 sm:grid-cols-[70px_1fr] lg:grid-cols-[70px_2fr_1fr] bg-white relative">

        {/* LEFT NAVBAR */}
        <div
          className={`h-full w-[200px] sm:w-full absolute sm:relative z-20 bg-[#1B1212] text-white flex flex-col items-center py-6 justify-between transform transition-transform duration-300 ${
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

        {/* CENTER CHAT */}
        <div className="flex flex-col bg-gray-50">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-white border-b">
            <div>
              <h1 className="text-lg font-semibold">Design Chat</h1>
              <p className="text-gray-500 text-sm">23 members, 10 online</p>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              {/* Toggle Navbar on Mobile */}
              <button className="lg:hidden text-xl" onClick={() => setShowNavbar(!showNavbar)}>
                ☰
              </button>
              <IoMdSearch className="text-xl" />
              <HiPhone className="text-xl" />
              <HiOutlineDotsVertical className="text-xl" />
              {/* Toggle Sidebar on Mobile */}
              <button className="lg:hidden text-xl" onClick={() => setShowSidebar(!showSidebar)}>
                ℹ️
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">Jasmin Lowery</p>
                <p className="bg-gray-200 inline-block px-3 py-2 rounded-xl text-sm">
                  Hello team! Welcome 🎉
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div>
                <p className="bg-indigo-500 text-white inline-block px-3 py-2 rounded-xl text-sm">
                  Thanks! Glad to be here 😊
                </p>
              </div>
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-3 p-3 border-t bg-white">
            <label htmlFor="file" className="cursor-pointer">
              <MdOutlineFileUpload className="text-xl text-gray-600" />
            </label>
            <input type="file" id="file" hidden />
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm rounded-lg border outline-none"
            />
            <MdOutlineKeyboardVoice className="text-xl text-gray-600 cursor-pointer" />
            <LiaTelegramPlane className="text-xl text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div
          className={`h-full w-[250px] absolute lg:relative z-20 bg-gray-50 border-l hidden md:block flex flex-col transform transition-transform duration-300 ${
            showSidebar ? "translate-x-0 right-0" : "translate-x-full lg:translate-x-0"
          }`}
        >
          {/* Files */}
          <div className="p-4 bg-white border-b">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-base font-semibold">Group Info</h1>
              <IoMdClose
                className="cursor-pointer text-lg text-gray-500 lg:hidden"
                onClick={() => setShowSidebar(false)}
              />
            </div>
            <h2 className="text-sm font-medium mb-2">Files</h2>
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-1">
              <div className="flex items-center gap-2">
                <GrGallery className="text-gray-500" />
                <span className="text-sm">285 Photos</span>
              </div>
              <IoMdClose className="text-gray-400 text-sm" />
            </div>
            <div className="flex gap-2 mt-2">
              <img
                src="https://picsum.photos/80"
                className="w-16 h-16 object-cover rounded-lg"
                alt=""
              />
              <img
                src="https://picsum.photos/81"
                className="w-16 h-16 object-cover rounded-lg"
                alt=""
              />
            </div>
          </div>

          {/* Members */}
          <div className="flex-1 overflow-y-auto p-4 ">
            <h2 className="text-sm font-medium mb-3">23 Members</h2>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={`https://randomuser.me/api/portraits/${
                    i % 2 ? "women" : "men"
                  }/${i + 10}.jpg`}
                  className="w-10 h-10 rounded-lg object-cover"
                  alt="member"
                />
                <div>
                  <p className="text-sm font-medium">User {i + 1}</p>
                  <p className="text-xs text-gray-400">Member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
