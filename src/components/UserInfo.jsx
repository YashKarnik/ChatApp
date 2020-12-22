import React from 'react'
import {useUserContext} from '../contexts/userContext'
export default function UserInfo() {
    const {currentUser} =useUserContext()
    return (
     <div className="chat-window-item">
         {currentUser.email}
     </div>
    )
}
