import React from 'react';
import BlobAnimation from '../BlobAnimation/BlobAnimation';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Left}>
        <h1>Full stack developer</h1>
        <h2>Hi! I'm Stacey McKnight, a software developer with a background in graphic design and marketing</h2>
      </div>
      <div className={styles.Right}>
        <BlobAnimation />
      </div>
    </div>
  )
}

export default Hero;