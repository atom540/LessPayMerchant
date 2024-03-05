/** @format */

"use client";

import React from "react";
import styles from "./helpsupport.module.css";
import question from "../../public/images/help_questionmark.png";
import arrow from "../../public/images/right_arrow.png";
import left from "../../public/images/big_left.png";
import map from "../../public/images/map.png";
import message from "../../public/images/message.png";
import Image from "next/image";
const page = () => {
  return (
    <div className={styles.help_support_main}>
      <div className={styles.title_container}>
      <Image src={left} alt="" />
        <h1>Help & Support</h1>
        <p className={styles.title_txt}>Help desk for the Gastos App</p>
      </div>

      <div className={styles.body_container}>
        <div className={styles.body_list}>
          <Image src={question} alt="" />
          <p>Frequently Asked Questions</p>
          <Image onClick={()=> { window.location.href = '/faq'; }} src={arrow} alt="" />
        </div>
        <div style={{  backgroundColor: "black", height: "3px", width:"100%" }} />
        <div className={styles.body_list}>
          <Image src={map} alt="" />
          <p>Guide to Less Pay Business App</p>
          <Image onClick={()=> { window.location.href = '/guide'; }} src={arrow} alt="" />
        </div>
        <div style={{  backgroundColor: "black", height: "3px", width:"100%" }} />
        <div className={styles.body_list}>
          <Image src={message} alt="" />
          <p>Report an Issue</p>
          <Image onClick={()=> { window.location.href = '/reportIssue'; }} src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
