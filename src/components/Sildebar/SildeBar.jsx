import React from 'react'
import { IoMdClose } from "react-icons/io";
import img1 from '../../assets/m1.jpg'
import img2 from '../../assets/m2.jpg'
import img3 from '../../assets/m3.jpg'
import img4 from '../../assets/m4.jpg'
import img5 from '../../assets/m5.jpg'
import img6 from '../../assets/m6.jpg'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { FiVideo } from "react-icons/fi";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineAudiotrack } from "react-icons/md";
import { IoLink } from "react-icons/io5";
import { MdOutlineKeyboardVoice } from "react-icons/md";

export const SildeBar = () => {

  const user = [
    {
      name: "Tanisha combs",
      Img: img1,
      type: "admin"
    },
    {
      name: "Alex Hunt",
      Img: img2,
    },
    {
      name: "jasmin Lowery",
      Img: img3,
    },
    {
      name: "Max Paaila",
      Img: img4,
    },
    {
      name: "Jessie Rolines",
      Img: img5,
    },
    {
      name: "Lukas Mcgowan",
      Img: img6,
    }
  ]

  const group = [
    {
      icon: <FiVideo />,
      name: "13 Videos "
    },
    {
      icon: <CiFileOn />,
      name: "13 Videos "
    },
    {
      icon: <MdOutlineAudiotrack />,
      name: "13 Videos "
    },
    {
      icon: <IoLink />,
      name: "13 Videos "
    },
    {
      icon: <MdOutlineKeyboardVoice />,
      name: "13 Videos "
    }
  ]


  return (
    <div className='border h-full w-full p-2' >
      <div className="border h-[50%] ">

      </div>
      <div className="border h-[50%] px-6 py-2 overflow-y-scroll ">
        <div className="flex justify-between my-4">
          <h1 className='text-lg font-semibold' > 23 Member </h1>
          <p className='text-3xl text-gray-500' >   <IoMdClose /> </p>
        </div>

        {user.map((item,i) => (
          <div key={i} className='flex items-center gap-3 mb-4 ' >
            <img src={item.Img} className='w-16 h-16 rounded-xl object-container' alt="" />
            <h1> {item.name} </h1>
            <p className='font-semibold text-gray-400' > {item.type} </p>
          </div>
        ))}

      </div>

    </div>
  )
}
