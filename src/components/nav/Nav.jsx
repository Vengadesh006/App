import logo from "../../assets/logo.png"
import { FaRegMessage } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import { FaFolder } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";


export const Nav = () => {
    return (
        <div className="w-35 h-full flex flex-col items-center gap-20 p-4">
            <div className="brand">

                <img src={logo} className="w-16" alt="" />
            </div>

            <ul className='flex flex-col items-center gap-5' >
               
                <li>
                    <IoMdChatboxes className='text-3xl font-blod' />
                    <p> Work   </p>
                </li>
                <li>
                    <FaFolder className='text-2xl font-blod' />
                    <p> Friends  </p>
                </li>
                <li>
                    <FaFolderOpen className='text-2xl font-blod' />
                    <p> News  </p>
                </li>
               
                <li>
                    <IoPersonCircleOutline className='text-3xl font-blod' />
                    <p> profile  </p>
                </li>
                <li>
                    <FaRegEdit className='text-2xl font-blod' />
                    <p> edit  </p>
                </li>
                <li>

                </li>

            </ul>
            <div className="login">
                  <MdOutlineLogout className='text-2xl font-blod'  />
                  <p> Login </p>
            </div>

        </div>
    )
}
