'use client'

import styles from './grievance.module.css'
import Image from "next/image";
import left from "../../public/images/big_left.png";
const AboutUs = () => {
  return (
    <div className={styles.container}>
     <Image src={left} alt="" onClick={()=> { window.location.href = '/aboutgastos'; }} />
      <h1>Grievance Policy</h1>
      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
        accusamus nam! Deserunt cupiditate eum fugiat molestiae beatae eligendi
        illo.
        <br />
        <br />
        Quae numquam veniam eveniet, saepe officia corrupti! Culpa adipisci
        nesciunt esse.
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea odio sint
        ipsum cupiditate non eaque ipsa sit accusamus! Fugit provident ipsa
        nesciunt consequatur enim at placeat atque, voluptatibus reprehenderit
        deleniti!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eum
        minima, aliquam fugit sequi eos possimus sit repellat commodi maiores
        beatae pariatur inventore doloribus unde officia harum fugiat. Minima,
        nisi!
        <br />
        <br />
        <br />
        <br />
        <h1 className={styles.title}>Grievance Redressal</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        temporibus assumenda autem, sit, fuga deleniti error, iure a ipsa
        quisquam expedita! Aliquam doloremque repellendus laboriosam non ab
        velit inventore perspiciatis!
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
        debitis quam blanditiis pariatur reiciendis? Fugit hic earum
        necessitatibus laudantium aspernatur eius error velit quas eligendi,
        nihil nobis at beatae corporis?
        <br />
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cum, iure
        deserunt distinctio unde error nesciunt magni, animi corrupti facere
        doloremque, accusantium perferendis impedit sequi. Porro a accusantium
        aperiam molestiae!
      </div>
    </div>
  )
}

export default AboutUs
