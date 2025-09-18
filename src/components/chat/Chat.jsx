import React, { useState } from "react";

import { Message } from "../message/Message";
import { SildeBar } from "../Sildebar/SildeBar";
import { Nav } from "../nav/Nav";
 
const ChatApp = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-3">
         <div
        className="w-full h-full shadow-xl max-w-[98rem] rounded-4xl bg-[#212023] px-2 py-2
                  grid grid-cols-1 sm:grid-cols-[100px_auto] lg:grid-cols-[100px_3fr_auto] 
                 overflow-hidden"
      >


      
      <Nav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Messages */}
      <Message
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Sidebar / Advert Section */}
      <aside className="hidden lg:block">
        <SildeBar />
      </aside> 

     </div>
      
      </div>
    

  );
};
// "py-2 px-3 shadow-xl max-w-8xl rounded-4xl bg-[#212023] 
//                   grid grid-cols-1 sm:grid-cols-[70px_1fr] lg:grid-cols-[70px_4fr_auto] 
//                   gap-2 overflow-hidden"

export default ChatApp;

