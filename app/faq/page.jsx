'use client'
import styles from './faq.module.css'
import { useState } from 'react'
const AboutUs = () => {
  let [open,setOpen] = useState(false);
  let handleClick = ()=>{
    setOpen((Open)=>!Open);
  }
  return (
    <div className={styles.container}>
      <a
        href="#"
        className={` ${styles.btn} ${styles.previous} ${styles.round}`}
      >
        &#8249;
      </a>
      <h1>FAQs</h1>
      <p>Frequently Asked Questions</p>
      <div className={styles.content}>
        <h3 className={styles.titlecontent}>
          What is a referral Program
        </h3>
      </div>
    </div>
  )
}

export default AboutUs
