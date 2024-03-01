import React from 'react'
import styles from './Featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to Oluwole Samson Blog!</b> Discover stories and ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpg" alt="img" className={styles.image} height={450} width={600}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Embark on an Adventure: Explore Oluwole Samson&apos;s Blog</h1>
          <p className={styles.postDesc}>
            Step into a realm of boundless inspiration at Oluwole Samson&apos;s Blog.
             Immerse yourself in captivating narratives, delve into insightful
              articles, and unlock a world of endless possibilities. Join our
               community of explorers today and embark on an unforgettable adventure
                of knowledge and discovery!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured