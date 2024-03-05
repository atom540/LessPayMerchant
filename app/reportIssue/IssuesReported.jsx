"use client"
import React from 'react'
import styles from "./IssuesReported.module.css";
import Image from "next/image";
import complete from "../../public/images/complete.png";
const IssuesReported = ({dull}) => {
   
  return (
    <div className={`${styles.main_body} ${dull ? styles.transparent_black : ''}`}>
        <div className={styles.main_container}>
            <Image src={complete}  alt="" />
            <h3 className={styles.title}>Your report has been field !</h3>
            <p className={styles.text}>A Gastos will contact you within 48 hours</p>
            <button className={styles.btn_submit} type="submit" onClick={()=> { window.location.href = '/help&support'; }}>Okay</button>
        </div>
    </div>
  )
}

export default IssuesReported
