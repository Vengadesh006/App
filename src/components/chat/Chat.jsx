import React, { useState } from "react";

import { Message } from "../message/Message";
import { SildeBar } from "../Sildebar/SildeBar";
import { Nav } from "../nav/Nav";

const ChatApp = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="w-full h-auto flex items-center justify-center bg-gray-100 p-15">
      <div className="w-full h-auto shadow-xl rounded-2xl p-3 bg-[#1B1212] grid 
        grid-cols-1 sm:grid-cols-[70px_1fr] lg:grid-cols-[70px_3fr_1fr] gap-3"
      
        
        >
        <Nav showSidebar={showSidebar} setShowNavbar={setShowNavbar} showNavbar={showNavbar}  />
        <Message />
        <SildeBar />
    
     
      </div>
    </div>
  );
};

export default ChatApp;
