import logo from "../../assets/logo.png";
import { IoMdChatboxes } from "react-icons/io";
import { FaFolder, FaFolderOpen } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

export const Nav = () => {
  return (
    <div className="h-full w-full bg-white border-r flex flex-col items-center py-6 justify-between"
    style={{background : "transparent"}}
    >
      {/* Brand Logo */}
      <div>
        <img src={logo} className="w-12 h-12 object-contain" alt="logo" />
      </div>

      {/* Menu */}
      <ul className="flex flex-col items-center gap-8 text-[#FFFFF0] ">
        <li className="flex flex-col items-center cursor-pointer hover:text-[#FFFDD0] ">
          <IoMdChatboxes className="text-2xl" />
          <p className="text-[10px] mt-1">Work</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer   hover:text-[#FFFDD0]">
          <FaFolder className="text-xl" />
          <p className="text-[10px] mt-1">Friends</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer   hover:text-[#FFFDD0]">
          <FaFolderOpen className="text-xl" />
          <p className="text-[10px] mt-1">News</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer   hover:text-[#FFFDD0]">
          <IoPersonCircleOutline className="text-2xl" />
          <p className="text-[10px] mt-1">Profile</p>
        </li>
      </ul>

      {/* Login/Logout */}
      <div className="flex flex-col items-center cursor-pointer text-[#FFFFF0]  hover:text-[#FFFDD0]">
        <MdOutlineLogout className="text-xl" />
        <p className="text-[10px] mt-1">Login</p>
      </div>
    </div>
  );
};
