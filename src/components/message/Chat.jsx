import React from 'react'
import user1 from "../../assets/user.jpeg";

export const Chat = () => {
  return (
    <><div className="flex-1 overflow-y-auto p-6 space-y-4">
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
    
    
    </>
  )
}
