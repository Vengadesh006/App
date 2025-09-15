import logo from "../../assets/logo.png";
import { IoMdChatboxes } from "react-icons/io";
import { FaFolder, FaFolderOpen } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";

export const Nav = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col items-center py-6 justify-between"
    style={{background : "transparent"}}
    >
      {/* Brand Logo */}
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z8kKaYZJaQ-eWMrwnNI2YMLdJggSzQv1kg&s" className="w-12 h-12 object-contain" alt="logo" />
      </div>

      {/* Menu */}
      <ul className="flex flex-col items-center gap-2 text-white ">
        <li className="flex flex-col items-center cursor-pointer py-3 px-7 navhover relative">
          <IoMdChatboxes className="text-3xl " />
          <label htmlFor="" className="absolute top-0 -right-0 text-white font-bold right-0 py-1 px-2 rounded-full bg-orange-400 ">23</label>
          <p className="text-sm mt-1">All chats</p>

        </li>
        <li className="flex flex-col items-center cursor-pointer transition duration-200 rounded-md ease-in-out py-3 px-5 navhover relative ">
          <FaFolder className="text-3xl" />
           <label htmlFor="" className="absolute top-0 -right-0 text-white font-bold right-2 py-1 px-2 rounded-full bg-orange-500 ">4</label>
          <p className="text-sm mt-1">Friends</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer  transition duration-200 rounded-md ease-in-out py-3 px-5 navhover ">
          <FaFolderOpen className="text-3xl" />
          <p className="text-sm mt-1">News</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer  transition duration-200 rounded-md ease-in-out py-3 px-5 navhover ">
          <FaFolderOpen className="text-3xl" />
          <p className="text-sm mt-1">Achive chats </p>
        </li>
        <hr className="border border-white w-15" />
        <li className="flex flex-col items-center cursor-pointer  transition duration-200 rounded-md ease-in-out  py-3 px-5 navhover">
          <IoPersonCircleOutline className="text-3xl" />
          <p className="text-sm mt-1">Profile</p>
        </li>
        <li className="flex flex-col items-center cursor-pointer  transition duration-200 rounded-md ease-in-out  py-3 px-5 navhover">
          <RiEditBoxLine  className="text-3xl" />
          
          <p className="text-sm mt-1">Edit</p>
        </li>
      </ul>

      {/* Login/Logout */}
      <div className="flex flex-col items-center cursor-pointer text-[#FFFFF0]">
        <MdOutlineLogout className="text-3xl" />
        <p className="text-sm mt-1">Login</p>
      </div>
    </div>
  );
};
