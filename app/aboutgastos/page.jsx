/** @format */

"use client";

import React from "react";
import styles from "./AboutLessPayBiz.module.css";
import building from "../../public/images/building.png";
import arrow from "../../public/images/right_arrow.png";
import left from "../../public/images/big_left.png";
import emoji_sad from "../../public/images/emoji-sad.png";
import task from "../../public/images/task-square.png";
import text from "../../public/images/text.png";
import Image from "next/image";
const page = () => {
  return (
    <div className={styles.help_support_main}>
      <div className={styles.title_container}>
      <Image src={left} alt="" />
        <h1>About Less Pay Biz</h1>
        <p className={styles.title_txt}>Learn about Less Pay and its policies.</p>
      </div>

      <div className={styles.body_container}>
        <div className={styles.body_list}>
          <Image src={building} alt="" />
          <p>About Less Pay Biz</p>
          <Image src={arrow} alt="" onClick={()=> { window.location.href = '/aboutUs'; }}/>
        </div>
        <div style={{  backgroundColor: "#DCE2EF", height: "3px", width:"100%" }} />
        <div className={styles.body_list}>
          <Image src={emoji_sad} alt="" />
          <p>Greivance Policy</p>
          <Image src={arrow} alt="" onClick={()=> { window.location.href = '/grievancepolicy'; }}/>
        </div>
        <div style={{  backgroundColor: "#DCE2EF", height: "3px", width:"100%" }} />
        <div className={styles.body_list}>
          <Image src={task} alt="" />
          <p>Privacy Policy</p>
          <Image src={arrow} alt="" onClick={()=> { window.location.href = '/privacypolicy'; }}/>
        </div>
        <div style={{  backgroundColor: "#DCE2EF", height: "3px", width:"100%" }} />
        <div className={styles.body_list}>
          <Image src={text} alt="" style={{width:"31px" ,height:"27px"}} />
          <p>Terms & Conditions</p>
          <Image src={arrow} alt="" onClick={()=> { window.location.href = '/termsofservices'; }}/>
        </div>
      </div>
    </div>
  );
};

export default page;
