import React, { useState } from "react";

import { Message } from "../message/Message";
import { SildeBar } from "../Sildebar/SildeBar";
import { Nav } from "../nav/Nav";

const ChatApp = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-3">
  <div
    className="w-full h-full max-w-[110rem] py-2 px-4 shadow-xl rounded-4xl bg-[#212023] 
    grid grid-cols-1 sm:grid-cols-[70px_1fr] lg:grid-cols-[70px_3fr_auto] 
    gap-2 overflow-hidden"
  >
    {/* Navbar */}
    <Nav
      showSidebar={showSidebar}
      setShowNavbar={setShowNavbar}
      showNavbar={showNavbar}
    />

    {/* Messages */}
    <Message />

    {/* Sidebar / Advert Section */}
    <aside className="hidden lg:block">
      <SildeBar />
    </aside>
  </div>
</div>

  );
};

export default ChatApp;
