import React from 'react'
import user1 from "../../assets/user.jpeg";
import user2 from "../../assets/me1.jfif"
import user3 from "../../assets/w1.jfif"
import user4 from "../../assets/w2.jfif"
import d from "../../assets/d.jfif"
import v from "../../assets/v.jfif"

export const Chat = () => {
  return (
    <>
      <div className=" w-full h-[790px] max-h-full bg-transparent overflow-y-auto p-6 space-y-4">
        <div className="flex justify-start  gap-3">
          <div className="flex items-end">
            <img src={user1} className="w-15 h-14 rounded-md object-cover" alt="user" />
          </div>

          <div className="bg-gray-200 px-4 py-2 rounded-xl max-w-md">
            <h5 className='text-indigo-400 text-[20px] font-medium mb-1' > Deve </h5>
            <p className="text-lg font-medium mb-1">I added new flows to our design system.
              new you can use then the project
            </p>
            <div className="flex justify-between ">
              <p> 👍 <span>3 </span> </p>
              <p>9:30</p>
            </div>
          </div>
        </div>

        <div className="flex ml-19">

          <div className="bg-gray-200 px-4 py-2 rounded-xl max-w-md">
            <h5 className='text-indigo-400 text-[20px] font-medium mb-1' > Alex Hunt </h5>
            <p className="text-lg font-medium mb-1">  Hey guys! import News !</p>
          </div>

        </div>

        <div className="flex justify-start gap-3">
          <div className="flex items-end">
            <img src={user3} className="w-15 h-14 rounded-md object-cover" alt="user" />
          </div>

          <div className="bg-gray-200 px-4 py-2 rounded-xl max-w-md">
            <h5 className='text-indigo-400 text-[20px] font-medium mb-1' > Alex Hunt </h5>
            <p className="text-lg font-medium mb-1"> our intern @jchurch has successfullly completed his
              probationary period and is now part our taem . </p>
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <div className="bg-[#7676ed] text-white px-4 py-4 rounded-xl max-w-md">
            <p className='text-lg font-medium mb-1' >jadan congratualtion ! i will be glad to work with you an the project 😉</p>

          </div>
          <div className="flex items-end">
              <img src={user1} className="w-15 h-14 rounded-md object-cover" alt="user" />

          </div>
        
        </div>

        <div className="flex gap-4 mx-4 justify-start gap-3">
          <div className="flex items-end">
            <img src={user2} className="w-15 h-14 rounded-md object-cover" alt="user" />
          </div>
          <div className="">
            <img src={d} className='w-80 h-40 object-cover rounded-xl' alt="" />
            <div className="bg-gray-100 text-white px-4 py-4 rounded-xl max-w-xs">
              <h6 className='text-indigo-400 font-medium text-[20px] mb-3' > Jessie Rollins </h6>
              <img src={v} className='w-83 h-16 object-cover' alt="" />
            </div>

          </div>


        </div>


      </div>


    </>
  )
}
