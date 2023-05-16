import React, { useState } from "react";
import Avatar from "./Avatar";
import Image from "next/image";

import styles from "../styles/Card.module.scss";

const Card = ({ el, selected }) => {
  const avatar = false;
  const userID = el.id;

  return (
    <div className={selected==userID?styles.selected:styles.card}>
      {avatar ? (
        <Image src={avatar} alt="" width={49} height={49} />
      ) : (
        <Avatar width={"49px"} height={"49px"} />
      )}
      <div>
        <p>{userID}</p>
        <p>{'chatHistory'}</p>
      </div>
    </div>
  );
};

export default Card;
