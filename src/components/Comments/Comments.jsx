import React from 'react'
import styles from './Comments.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Comments = () => {

    const status = 'authenticated'
  return (

    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === 'authenticated' ? (
            <div className={styles.write}>
                <textarea placeholder='Write a Comment...' className={styles.input} />
                <button className={styles.button}>Send</button>
            </div>
            ) : (
            <Link href='/login'>Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    < Image
                     src='/p1.jpg'
                      alt=''
                       width={50}
                        height={50}
                         className={styles.image}
                          />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Joseph Adebayo</span>
                        <span className={styles.date}>14.02.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                     Discover captivating stories, expert advice, and
                     thought-provoking insights across a variety of topics.
                      Whether you're passionate about food, fashion, finance,
                       or anything in between, our blog has something for every
                        curious mind. Join us on this journey of discovery and
                         let's explore together!
                </p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    < Image
                     src='/p1.jpg'
                      alt=''
                       width={50}
                        height={50}
                         className={styles.image}
                          />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Joseph Adebayo</span>
                        <span className={styles.date}>14.02.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                     Discover captivating stories, expert advice, and
                     thought-provoking insights across a variety of topics.
                      Whether you're passionate about food, fashion, finance,
                       or anything in between, our blog has something for every
                        curious mind. Join us on this journey of discovery and
                         let's explore together!
                </p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    < Image
                     src='/p1.jpg'
                      alt=''
                       width={50}
                        height={50}
                         className={styles.image}
                          />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Joseph Adebayo</span>
                        <span className={styles.date}>14.02.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                     Discover captivating stories, expert advice, and
                     thought-provoking insights across a variety of topics.
                      Whether you're passionate about food, fashion, finance,
                       or anything in between, our blog has something for every
                        curious mind. Join us on this journey of discovery and
                         let's explore together!
                </p>
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    < Image
                     src='/p1.jpg'
                      alt=''
                       width={50}
                        height={50}
                         className={styles.image}
                          />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Joseph Adebayo</span>
                        <span className={styles.date}>14.02.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                     Discover captivating stories, expert advice, and
                     thought-provoking insights across a variety of topics.
                      Whether you're passionate about food, fashion, finance,
                       or anything in between, our blog has something for every
                        curious mind. Join us on this journey of discovery and
                         let's explore together!
                </p>
            </div>

            

            
        </div>
    </div>
  )
}

export default Comments