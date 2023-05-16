import React, { useState, useEffect } from "react";
import  Image  from "next/image";
import Avatar from "./Avatar";
import { sendMessage } from "../../utils/sendMessage";
import { getChatHistory } from "../../utils/getChatHistory";
import { receiveNotification } from "../../utils/receiveNotification";
import styles from "../styles/Chat.module.scss";

interface message {
  "type": string,
        "idMessage":string,
        "timestamp": number,
        "typeMessage": string,
        "chatId": string,
        "textMessage": string,
        "statusMessage": string,
        "sendByApi":boolean
}
const Chat = ({ userID }) => {
  const avatar = false;
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getChatHistory({ userID }).then((res) => setMessages(res));
  }, [userID]);

  const handleMsg = ({ target }) => {
    setMsg(target.value);
  };

  const sendMsg = () => {
    sendMessage({ userID, msg });
    getChatHistory({ userID }).then((res) => setMessages(res));
    setMsg("");
  };

  const enterHandler = (event) => {
    if (event.key === "Enter") {
      sendMsg();
      event.target.value = "";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      receiveNotification().then((res) => {
        if (res) {
          getChatHistory({ userID }).then((res) => setMessages(res));
        }
      });
    }, 100000);
  })
console.log(messages)
  return (
    <div className={styles.chat}>
      <div className={styles.chat__header} onClick={() => {}}>
        {avatar ? (
          <Image src={avatar} alt="" width={40} height={40} />
        ) : (
          <Avatar width={"40px"} height={"40px"} />
        )}
        <p>{userID}</p>
      </div>
      <div className={styles.chat__body}>
        {messages.length>0 &&
          messages
            .filter((elem:message) => elem.typeMessage === "textMessage")
            .reverse()
            .map((el:message, i) => {
              if (el.type == "incoming") {
                return (
                  <div className={styles.chat__body__incoming} key={i}>
                    {el.textMessage}
                  </div>
                );
              } else {
                return (
                  <div className={styles.chat__body__outgoing} key={i}>
                    {el.textMessage}
                  </div>
                );
              }
            })}
      </div>
      <div className={styles.chat__footer}>
        <input
          type="text"
          placeholder="Введите сообщение"
          id="message"
          onChange={(e) => handleMsg(e)}
          onKeyUp={enterHandler}
        />
      </div>
    </div>
  );
};

export default Chat;
