import React from 'react';
import PatternBg from '../PatternBg/PatternBg';
import styles from './PatternBgWrapper.module.scss';

const PatternBgWrapper = ({children}) => {
  return (
    <div className={styles.PatternBgWrapper}>
      <PatternBg position="Top"/>
      <PatternBg position="Bottom"/>
      {children}
    </div>
  )
}

export default PatternBgWrapper;