import React from 'react';
import Graphic from '../../assets/hero.svg';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Left}>
        <h1>Fullstack developer</h1>
        <h2>Hi, I'm Stacey McKnight, a web developer with a background in graphic design and marketing</h2>
      </div>
      <div className={styles.Right}>
        <img src={Graphic} />
      </div>
    </div>
  )
}

export default Hero;