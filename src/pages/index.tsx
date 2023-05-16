import Modal from "../components/Modal";
import React, { useEffect, useState } from "react";
import { getChats } from "../../utils/getChats";
import Header from "../components/Header";
import Card from "../components/Card";
import NoChat from "../components/NoChat";
import Chat from "../components/Chat";

import styles from "../styles/index.module.scss";

interface chatsMessage  {
  "archive": boolean,
        "id": string,
        "notSpam": boolean,
        "ephemeralExpiration": number,
        "ephemeralSettingTimestamp": number
}
export default function Home() {
  const [stateInstance, setStateInstance] = useState("");
  const [chatsMessage, setChatsMessage] = useState<chatsMessage[]>();
  const [selected, setSelected] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getChats().then((res) => setChatsMessage(res));
  }, [stateInstance]);

  return (
    <>
      {!chatsMessage && <Modal setStateInstance={setStateInstance} />}

      <div className={styles.main}>
        <div className={styles.main__heading}></div>
        <div className={styles.main__body}></div>
        <div className={styles.main__container}>
          <div className={styles.main__content}>
            <div className={styles.main__bar}>
              <Header avatar={avatar} />
              <div className={styles.main__box}>
                <div className={styles.main__box__search}>
                  <input
                    type="text"
                    placeholder="Поиск или новый чат"
                    id="search"
                  />
                  <svg
                    className={styles.main__box__iconSearch}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
                    ></path>
                  </svg>
                  <svg
                    className={styles.main__box__iconFilter}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"
                    ></path>
                  </svg>
                </div>
                <hr />
                <div className={styles.main__box__contacts}>
                  {chatsMessage &&
                    chatsMessage.map((el, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setSelected(el.id);
                        }}
                      >
                        <Card el={el} selected={selected} />
                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className={styles.main__chat}>
              {selected ? <Chat userID={selected} /> : <NoChat />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
