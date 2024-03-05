'use client'
import React, { useState } from 'react'
import Image from "next/image";
import arrow from "../../public/images/right_arrow.png";
import down from "../../public/images/down.png";

import styles from './Faq_list.module.css'
const Faq_list = ({title, text ,list}) => {
    const [active,setActive] =useState(false);
    const handleClick = ()=>{
        setActive(!active);
    }
    const renderListItems = () => {
        if (!list) return null;

        
        const listItems = list.split('$');
        return (
            <ul className={styles.list}>
                {listItems.map((item, index) => (
                   item&& <li key={index}>{item.trim()}</li>
                ))}
            </ul>
        );
    };

  return (
    <div className={styles.faq_list}>
        <div className={styles.faq_titles}>
        <h3>{title}</h3>
        
       { !active&&<Image className={styles.right_arrow} onClick={handleClick} src={arrow} alt="" />}
       { active&&<Image className={styles.right_arrow} onClick={handleClick} src={down} alt="" />}
        </div>
        {active&&(<div className={styles.faq_content}>
        <p>
       {text} 
        </p>
        {renderListItems()}
        </div>)}
      </div>
  )
}

export default Faq_list
