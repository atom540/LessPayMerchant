"use client"
import React from 'react'
import styles from'./Guide.module.css'
import Image from "next/image";
import left from "../../public/images/big_left.png";
const page = () => {
  return (
    <div className={styles.help_support_main}>
      <div className={styles.title_container}>
      <Image src={left} alt="" onClick={()=> { window.location.href = '/help&support'; }}/>
        <h2 className={styles.title}>Guide to Less Pay Business App</h2>
        <p className={styles.title_txt}>Learn how Less Pay Business works.</p>
      </div>
      <div className={styles.guide_text}>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices orci lacus, eget malesuada orci maximus vitae. Suspendisse sed odio imperdiet, mollis lectus eu, ultrices nibh.

Nam nec tincidunt ex, in ultrices purus. Fusce at urna non est molestie ultrices. Nunc elementum tincidunt sagittis.

roin feugiat augue vitae nisl posuere sodales eget vitae lacus. Nunc tristique magna leo, quis mollis est porttitor sed.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices orci lacus, eget malesuada orci maximus vitae. Suspendisse sed odio imperdiet, mollis lectus eu, ultrices nibh.

Nam nec tincidunt ex, in ultrices purus. Fusce at urna non est molestie ultrices. Nunc elementum tincidunt sagittis.

roin feugiat augue vitae nisl posuere sodales eget vitae lacus. Nunc tristique magna leo, quis mollis est porttitor sed.</p>
      </div>
    </div>
  )
}

export default page
