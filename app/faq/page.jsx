'use client'
import styles from './faq.module.css'
import { useState } from 'react'

import Image from "next/image";
import left from "../../public/images/big_left.png";
import Faq_list from './Faq_list';
const AboutUs = () => {
  let [open,setOpen] = useState(false);
  let handleClick = ()=>{
    setOpen((Open)=>!Open);
  }
  return (
    <div className={styles.help_support_main}>
    <div className={styles.title_container}>
    <Image src={left} alt="" onClick={()=> { window.location.href = '/help&support'; }} />
      <h2 className={styles.title}>FAQs</h2>
      <p className={styles.title_txt}>Frequently asked Questions</p>
    </div>

    <div className={styles.faq_body}>
      <Faq_list text={" Maecenas malesuada tellus eu posuere vehicula. Nam nec dapibus nisi, quis efficitur ante. Duis nec bibendum eros. Proin euismod nulla a massa facilisis, non vestibulum augue auctor. Ut ornare at est ac ullamcorper."} title={"What is the referral program?"}/>

      <Faq_list text={"Maecenas malesuada tellus eu posuere vehicula. Nam nec dapibus nisi, quis efficitur ante:-"} 
      title={"How it works?"} list={"Tell your friends about Less Pay Business Club and register them on the app      Complete all the steps of registration including payment for registration.$Go to the Manage Account Section in Settings page and enter your registered phone number and validate there.$You can check in your wallet that you have received Rs 150 in your wallet."}/>

      <Faq_list text={""} title={"Where could I use these coins?"} />
    </div>
    </div>
  )
}

export default AboutUs
