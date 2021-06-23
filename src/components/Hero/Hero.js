import React from 'react';
import Main from '../ThemedSvg/Main';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Left}>
        <h1>Fullstack developer</h1>
        <h2>Hi! I'm Stacey McKnight, a web developer with a background in graphic design and marketing</h2>
      </div>
      <div className={styles.Right}>
        <Main />
      </div>
    </div>
  )
}

export default Hero;