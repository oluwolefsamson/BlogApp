import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from '@/components/Comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Welcome to Samtech Blog!
                 Embark on an Adventure.</h1>
                 <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        < Image src='/p1.jpg' alt='' fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Faith Feyisike</span>
                        <span className={styles.date}>14.02.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                < Image src='/p1.jpg' alt='' fill className={styles.image} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p className="">
                    Welcome to Samtech, your go-to destination
                     for insightful articles, helpful tips, and engaging stories.
                      Whether you're looking for inspiration, practical advice, or
                       simply a good read, we've got you covered. From lifestyle and
                        wellness to travel and technology, our diverse range of topics
                         ensures there's something for everyone. Join our community
                          of readers and explore the world of ideas with us!
                    </p>
                    <h2 className="">
                    Discover captivating stories, expert advice, and thought-provoking
                     insights across a variety of topics. 
                    </h2>

                    <p className="">
                    Welcome to Samtech, your go-to destination
                     for insightful articles, helpful tips, and engaging stories.
                      Whether you're looking for inspiration, practical advice, or
                       simply a good read, we've got you covered. From lifestyle and
                        wellness to travel and technology, our diverse range of topics
                         ensures there's something for everyone. Join our community
                          of readers and explore the world of ideas with us!
                    </p>

                    <p className="">
                    Welcome to Samtech, your go-to destination
                     for insightful articles, helpful tips, and engaging stories.
                      Whether you're looking for inspiration, practical advice, or
                       simply a good read, we've got you covered. From lifestyle and
                        wellness to travel and technology, our diverse range of topics
                         ensures there's something for everyone. Join our community
                          of readers and explore the world of ideas with us!
                    </p>
                </div>
                <div className={styles.comment}>
                    < Comments />
                </div>
            </div>
            < Menu />
            
        </div>
    </div>
  )
}

export default SinglePage