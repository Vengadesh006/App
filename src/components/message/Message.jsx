
import React, { useState } from "react";
import search from "../../assets/search.png";
import { IoMdSearch } from "react-icons/io";
import { CiPhone, CiServer } from "react-icons/ci";
import { HiOutlineDotsVertical, HiPhone } from "react-icons/hi";
import { MdOutlineKeyboardVoice, MdOutlineFileUpload } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/Firebase";
import { Chat } from "./Chat";
import user1 from "../../assets/user.jpeg";
import user2 from "../../assets/w1.jfif"
import user3 from "../../assets/w2.jfif"
import user4 from "../../assets/w4.jfif"
import user5 from "../../assets/me1.jfif"
import user6 from "../../assets/me2.jfif"
import user7 from "../../assets/me3.jfif"
import user8 from "../../assets/w5.jfif"
import user9 from "../../assets/me4.jfif"
import user10 from "../../assets/me5.jfif"
import { CiSearch } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi2";
export const Message = () => {
  const [user, setUser] = useState([
    { username: "Deve", chat: "Hi there, how can I assist you?", img: user1 },
    { username: "Alex", chat: "Let’s work on the new UI today!", img: user2 },
    { username: "Sarah", chat: "Meeting at 4 PM, don’t forget!", img: user3 },
    { username: "Osman Campos", chat: "Meeting at 4 PM, don’t forget!", img: user4 },
    { username: "Jayden Chursh", chat: "Meeting at 4 PM, don’t forget!", img: user5 },
    { username: "JaCob Mcleod", chat: "Meeting at 4 PM, don’t forget!", img: user6 },
    { username: "Jamin Lowery", chat: "Meeting at 4 PM, don’t forget!", img: user7 },
    { username: "Vanessa Cox", chat: "Meeting at 4 PM, don’t forget!", img: user8 },
    { username: "Anotoy Cordanes", chat: "Meeting at 4 PM, don’t forget!", img: user8 },
  ]);

  const [texts, setText] = useState("");

  const inputHandler = async (e) => {

    const input = e.target.value.trim().toLowerCase();

    const userRef = collection(db, "users")

    const q = query(userRef, where("username", "==", input))

    try{
      const querySnap =await getDocs(q)

      if(!querySnap.empty){
        querySnap.forEach((doc) => console.log( doc.data()))
      }
      else {
        console.log("user not fount");
        
      }

    }
    catch(err){
        console.log(err.message);
        
    }

   
  }
  return (
   <div className="w-full h-full flex bg-gray-50 rounded-4xl bg-white relative overflow-hidden">
  {/* Sidebar (Users) */}
  <div className="flex flex-col bg-transparent mt-3 py-3 w-full h-full md:w-[40%] lg:w-[32%]">
    <div className=" overflow-hidden bg-transparent rounded-md">
      <div className="flex items-center gap-2 ml-5 py-3 mr-4 px-2 bg-[#dbdcfe]  rounded-xl">
        <div className="text-3xl"><CiSearch  /> </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full text-[0.9rem] text-gray-300 placeholder:font-normal placeholder:text-black"
          onChange={inputHandler}
        />
      </div>
    </div>

    {/* Users */}
    <div className="flex flex-col shrink-0 overflow-y-auto">
      {user.map((info, i) => (
        <div
          key={i}
          className="flex  gap-3 mx-4 p-3 my-2 cursor-pointer hover:bg-indigo-100 hover:rounded-xl"
        >
          <img
            src={info.img}
            className="w-18 h-16 object-cover rounded-md"
            alt="user"
          />
          <div>
            <h1 className="text-base font-medium mb-1">{info.username}</h1>
            <p className="text-gray-500 text-sm truncate w-40">{info.chat}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Chat Area */}
  <div className="hidden md:flex flex-col flex-1 px-5 relative">
    {/* Header */}
    <div className="flex justify-between items-center mt-3 p-4 rounded-sm">
      <div>
        <h1 className="text-4xl font-medium mb-3">Design Chat</h1>
        <p className="text-gray-500 text-lg">23 members, 10 online</p>
      </div>
      <div className="flex items-center gap-9 text-gray-600">
        <CiSearch className="text-4xl" />
        <HiOutlinePhone className="text-4xl" />
        <HiOutlineDotsVertical className="text-4xl" />
      </div>
    </div>

    {/* Messages */}
    <Chat />

    {/* Input */}
    <div className="flex items-center gap-3 py-4 rounded-3xl bg-[#eeeffa] px-5 absolute bottom-3 right-10 left-14">
      <label htmlFor="file" className="text-xl cursor-pointer">
        <MdOutlineFileUpload className="text-4xl" />
      </label>
      <input type="file" id="file" hidden />

      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 text-xl rounded-lg outline-none text-sm"
      />
      <MdOutlineKeyboardVoice className="text-3xl cursor-pointer text-gray-600" />
      <LiaTelegramPlane className="text-3xl cursor-pointer text-blue-500" />
    </div>
  </div>
</div>

  );
};
