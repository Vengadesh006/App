import React, { useState } from "react";
import search from "../../assets/search.png";
import user1 from "../../assets/user.jpeg";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineDotsVertical, HiPhone } from "react-icons/hi";
import { MdOutlineKeyboardVoice, MdOutlineFileUpload } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/Firebase";

export const Message = () => {
  const [user, setUser] = useState([
    { username: "Deve", chat: "Hi there, how can I assist you?", img: user1 },
    { username: "Alex", chat: "Let’s work on the new UI today!", img: user1 },
    { username: "Sarah", chat: "Meeting at 4 PM, don’t forget!", img: user1 },
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
    <div className="w-full h-full flex bg-gray-50 py-4 rounded-3xl" >
     
      <div className="hidden md:flex flex-col w-1/3  bg-gray-300">
        
        <div className="p-4 sticky top-0 bg-white">
          <div className="flex items-center gap-2 bg-blue-200 rounded-lg">
            <img src={search} className="w-10" alt="search" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full text-sm text-gray-600"
              onChange={inputHandler}
            />
          </div>
        </div>

        {/* Users */}
        <div className="flex-1 bg-white overflow-y-auto">
          {user.map((info, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100"
            >
              <img
                src={info.img}
                className="w-12 h-12 object-cover rounded-full"
                alt="user"
              />
              <div>
                <h1 className="text-base font-semibold">{info.username}</h1>
                <p className="text-gray-500 text-sm truncate w-40">{info.chat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white shadow">
          <div>
            <h1 className="text-lg font-bold">Design Chat</h1>
            <p className="text-gray-500 text-xs">23 members, 10 online</p>
          </div>
          <div className="flex items-center gap-4 text-xl text-gray-600">
            <IoMdSearch />
            <HiPhone />
            <HiOutlineDotsVertical />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-start gap-3">
            <img src={user1} className="w-10 h-10 rounded-full" alt="user" />
            <div className="bg-gray-200 px-4 py-2 rounded-xl max-w-xs">
              <p className="text-gray-800">Hey, how’s it going?</p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-xl max-w-xs">
              <p>All good! Working on the project.</p>
            </div>
          </div>

        </div>

        {/* Input */}
        <div className="flex items-center gap-3 p-3 rounded-3xl bg-blue-100 px-2">
          <label htmlFor="file" className="text-xl cursor-pointer">
            <MdOutlineFileUpload />
          </label>
          <input type="file" id="file" hidden />

          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-lg outline-none text-sm"
            value={texts}
          
            
          />
          <MdOutlineKeyboardVoice className="text-xl cursor-pointer text-gray-600" />
          <LiaTelegramPlane className="text-xl cursor-pointer text-blue-500" />
        </div>
      </div>
    </div>
  );
};
