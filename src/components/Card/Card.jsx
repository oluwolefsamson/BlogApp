import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt=""fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>14.02.2024 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
                <h1 className={styles}>Embark on an Adventure:
                Explore Oluwole Samson's Blog
                </h1>
            </Link>
            <p className={styles.desc}>Step into a realm of boundless 
            inspiration at Oluwole Samson's Blog. Immerse
             yourself in captivating narratives, delve into
              insightful articles, and unlock a world of
               endless possibilities. Join our community of
                explorers today and embark on an unforgettable
                 adventure of knowledge and discovery
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}

export default Card