import React, { useState, useEffect } from 'react'
import Avatar from './Avatar'
import Image from 'next/image'
import { useApi } from '@/hooks/useApi';

import styles from '../styles/Chat.module.scss'

const Chat = ({el}) => {
    const [avatar, setAvatar] = useState('')
    const [message, setMessage] = useState({})
    const userID = el.id;
    
    const api = useApi()
   const getChat = ()=>{
      api.getChatHistory({userID}).then((res)=>setMessage(res)) ;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }; 
  return (
    <div className={styles.chat} onClick={getChat}>
        {avatar ? (
            <Image src={avatar} alt="" width={49} height={49} />
          ) : (
            <Avatar width={"49px"} height={"49px"} />
          )}
          <div>
          <p>{userID}</p>
          <p>{message[0]?.textMessage}</p>
          </div>
    </div>
  )
}

export default Chat

