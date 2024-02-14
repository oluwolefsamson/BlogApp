import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/menuPosts'
// import styles from '../menuPosts/menuPosts.module.css'
import MenuCategories from '../MenuCategories/MenuCategories'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
      <h1 className={styles.title}>Categories</h1>
      < MenuCategories />
      <h2 className={styles.subtitle}>{"Editor's Choice"}</h2>
      <h1 className={styles.title}>Editor's pick</h1>
      <MenuPosts withImage={true}/>
    </div>
  )
}

export default Menu