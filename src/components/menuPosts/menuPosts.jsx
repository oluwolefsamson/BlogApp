import React from 'react'
import styles from './menuPosts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
    <Link href='/' className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
                <Image src="/p1.jpg" alt='' fill className={styles.image} />
            </div>
            )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
        <h3 className={styles.postTitle}>Embark on an Adventure: Explore Oluwole Samson's Blog</h3>
        <div className={styles.detail}>
          <span className={styles.username}>Oluwole Samson Olawumi</span>
          <span className={styles.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>

    <Link href="/" className={styles.item}>
      {withImage && (
        <div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt="" fill className={styles.image} />
        </div>
        )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.coding}`}>Coding</span>
        <h3 className={styles.postTitle}>Embark on an Adventure: Explore Oluwole Samson's Blog</h3>
        <div className={styles.detail}>
          <span className={styles.username}>Oluwole Samson Olawumi</span>
          <span className={styles.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>

    <Link href='/' className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
                <Image src="/p1.jpg" alt="" fill className={styles.image} />
            </div>
            )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.culture}`}>Culture</span>
        <h3 className={styles.postTitle}>Embark on an Adventure: Explore Oluwole Samson's Blog</h3>
        <div className={styles.detail}>
          <span className={styles.username}>Oluwole Samson Olawumi</span>
          <span className={styles.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>

    <Link href='/' className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
                <Image src="/p1.jpg" alt="" fill className={styles.image} />
            </div>
            )}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
        <h3 className={styles.postTitle}>Embark on an Adventure: Explore Oluwole Samson's Blog</h3>
        <div className={styles.detail}>
          <span className={styles.username}>Oluwole Samson Olawumi</span>
          <span className={styles.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default MenuPosts