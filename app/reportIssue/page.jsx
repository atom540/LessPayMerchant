"use client"
import React, { useState } from 'react';
import styles from "./ReportIssues.module.css";
import Image from "next/image";
import left from "../../public/images/big_left.png";
import IssuesReported from './IssuesReported';

const page = () => {
  const [textAreaContent, setTextAreaContent] = useState("");
  const [active, setActive] = useState(false);
  const [dull, setDull] =useState(false);

  const handleTextAreaChange = (event) => {
    setTextAreaContent(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true);
    setDull(true);
    document.body.classList.add('transparent-black-bg');
  };

  return (
    <div className={styles.help_support_main}>
      {active && <IssuesReported dull={dull}/>}
      <div className={styles.title_container}>
        <Image src={left} alt="" onClick={() => { window.location.href = '/help&support'; }} />
        <h1>Report an Issue</h1>
        <p className={styles.title_txt}>Report your issue here</p>
      </div>
      <div className={styles.container}>
        <textarea
          id="myTextarea"
          rows="25"
          cols="10"
          value={textAreaContent}
          onChange={handleTextAreaChange}
          style={{ border: '2px solid #DCE2EF', borderRadius: '12px' }}
        />
        <button className={styles.btn_submit} type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default page;
